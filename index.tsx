

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI, Modality } from "@google/genai";
import { cases, categories } from './src/data';
import type { Case } from './src/data/types';


// --- Main App Component ---
const App: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(cases[0]);
  const [prompt, setPrompt] = useState<string>(cases[0].prompt);
  const [refinement, setRefinement] = useState<string>('');
  const [uploadedImages, setUploadedImages] = useState<{ id: string; url: string; file: File }[]>([]);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuggesting, setIsSuggesting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    categories.forEach(cat => {
      initialState[cat] = true; // Start all categories expanded
    });
    return initialState;
  });

  const [panelFlex, setPanelFlex] = useState([1, 1.6, 1.4]);
  const dragDataRef = useRef<{ index: number; startFlex: number[]; startX: number; panelWidths: number[] } | null>(null);

  const ai = useMemo(() => new GoogleGenAI({ apiKey: process.env.API_KEY }), []);
  
  const selectedCaseDisplayId = useMemo(() => {
    if (!selectedCase) return '';
    // Find the index of the selected case within its own category
    const categoryCases = cases.filter(c => c.category === selectedCase.category);
    const index = categoryCases.findIndex(c => c.id === selectedCase.id);
    
    return index !== -1 ? `${index + 1}` : '';
  }, [selectedCase]);

  const openModal = () => {
    if (resultImage) setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName]
    }));
  };

  const handleCaseSelect = (caseItem: Case) => {
    setSelectedCase(caseItem);
    setPrompt(caseItem.prompt);
    setRefinement('');
    setUploadedImages([]);
    setResultImage(null);
    setError(null);
  };

  const fileToBase64 = (file: File): Promise<{ mimeType: string; data: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const mimeType = result.split(',')[0].split(':')[1].split(';')[0];
        const data = result.split(',')[1];
        resolve({ mimeType, data });
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // FIX: Replaced Array.from().map() with a for...of loop to ensure proper type inference for 'file',
      // resolving the error "Argument of type 'unknown' is not assignable to parameter of type 'Blob | MediaSource'".
      const newImages = [];
      for (const file of files) {
        newImages.push({
          id: crypto.randomUUID(),
          url: URL.createObjectURL(file),
          file,
        });
      }
      setUploadedImages(prev => [...prev, ...newImages]);
      setResultImage(null);
       // Reset file input to allow uploading the same file again
      event.target.value = '';
    }
  };

  const handleRemoveImage = (id: string) => {
    // FIX: Revoke object URL to prevent memory leaks when an image is removed.
    setUploadedImages(prev => {
        const imageToRemove = prev.find(image => image.id === id);
        if (imageToRemove) {
            URL.revokeObjectURL(imageToRemove.url);
        }
        return prev.filter(image => image.id !== id);
    });
  };


  const handleDownload = () => {
      if (!resultImage) return;
      const link = document.createElement('a');
      link.href = resultImage;
      const mimeType = resultImage.split(';')[0].split(':')[1];
      const extension = mimeType.split('/')[1] || 'png';
      link.download = `nano-banana-studio-result.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const handleGenerate = async () => {
    if (!selectedCase) return;
    if (selectedCase.requiresImage && uploadedImages.length === 0) {
      alert("이 케이스는 이미지 업로드가 필요합니다.");
      return;
    }

    setIsLoading(true);
    setResultImage(null);
    setError(null);

    try {
      if (selectedCase.taskType === 'generate') {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/png',
            },
        });
        const base64Image = response.generatedImages[0].image.imageBytes;
        setResultImage(`data:image/png;base64,${base64Image}`);
      } else { // 'edit' taskType
        if (uploadedImages.length === 0) throw new Error("이미지가 필요합니다.");
        
        const imagePartsPromises = uploadedImages.map(img => fileToBase64(img.file));
        const resolvedImageParts = await Promise.all(imagePartsPromises);

        const imageParts = resolvedImageParts.map(partData => ({
            inlineData: { mimeType: partData.mimeType, data: partData.data },
        }));

        const parts = [...imageParts, { text: prompt }];

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: parts },
          config: {
              responseModalities: [Modality.IMAGE, Modality.TEXT],
          },
        });
        
        let foundImage = false;
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                const base64ImageBytes: string = part.inlineData.data;
                const imageUrl = `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
                setResultImage(imageUrl);
                foundImage = true;
                break;
            }
        }
        if (!foundImage) {
            throw new Error("API 응답에서 이미지를 찾을 수 없습니다.");
        }
      }
    } catch (err) {
      console.error(err);
      const errorMessage = (err instanceof Error) ? err.message : String(err);
      setError(`오류가 발생했습니다: ${errorMessage}`);
      alert(`오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestPrompt = async () => {
    if (!selectedCase || !prompt) {
        alert("기존 프롬프트가 있어야 제안을 받을 수 있습니다.");
        return;
    }

    setIsSuggesting(true);
    setError(null);

    try {
        const instruction = `Act as an expert prompt engineer. Your task is to refine the following prompt to generate better images. Use the user's instructions and the provided image for context. Only return the new prompt text, nothing else.

        Original Prompt: "${prompt}"

        User's refinement instructions: "${refinement}"`;

        const parts: any[] = [{ text: instruction }];

        if (uploadedImages.length > 0) {
            const imagePartsPromises = uploadedImages.map(img => fileToBase64(img.file));
            const resolvedImageParts = await Promise.all(imagePartsPromises);
            resolvedImageParts.forEach(partData => {
                 parts.push({
                    inlineData: { mimeType: partData.mimeType, data: partData.data },
                });
            });
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: parts },
        });

        const newPrompt = response.text.trim();
        setPrompt(newPrompt.replace(/^"|"$/g, ''));

    } catch (err) {
        console.error(err);
        const errorMessage = (err instanceof Error) ? err.message : String(err);
        setError(`프롬프트 제안 중 오류 발생: ${errorMessage}`);
        alert(`프롬프트 제안 중 오류 발생: ${errorMessage}`);
    } finally {
        setIsSuggesting(false);
    }
  };

  const handleGutterMouseUp = useCallback(() => {
    dragDataRef.current = null;
    document.body.style.cursor = 'default';
    window.removeEventListener('mousemove', handleGutterMouseMove);
    window.removeEventListener('mouseup', handleGutterMouseUp);
  }, []);

  const handleGutterMouseMove = useCallback((e: MouseEvent) => {
    if (!dragDataRef.current) return;

    const { index, startFlex, startX, panelWidths } = dragDataRef.current;
    const deltaX = e.clientX - startX;

    const totalWidth = panelWidths[index] + panelWidths[index + 1];
    let newWidthA = panelWidths[index] + deltaX;
    let newWidthB = panelWidths[index + 1] - deltaX;

    const minPixelWidth = 150;

    if (newWidthA < minPixelWidth) {
        newWidthA = minPixelWidth;
        newWidthB = totalWidth - minPixelWidth;
    }
    if (newWidthB < minPixelWidth) {
        newWidthB = minPixelWidth;
        newWidthA = totalWidth - minPixelWidth;
    }

    const newFlex = [...startFlex];
    const totalFlex = startFlex[index] + startFlex[index + 1];
    newFlex[index] = (newWidthA / totalWidth) * totalFlex;
    newFlex[index + 1] = (newWidthB / totalWidth) * totalFlex;

    setPanelFlex(newFlex);
  }, []);

  const handleGutterMouseDown = useCallback((index: number, e: React.MouseEvent, panels: (HTMLDivElement | null)[]) => {
      e.preventDefault();
      const panelElements = panels.filter(p => p) as HTMLDivElement[];
      if(panelElements.length !== 3) return;

      dragDataRef.current = {
          index,
          startFlex: [...panelFlex],
          startX: e.clientX,
          panelWidths: panelElements.map(p => p.offsetWidth),
      };

      document.body.style.cursor = 'col-resize';
      window.addEventListener('mousemove', handleGutterMouseMove);
      window.addEventListener('mouseup', handleGutterMouseUp);
  }, [panelFlex, handleGutterMouseMove, handleGutterMouseUp]);

  const leftPanelRef = useRef<HTMLDivElement>(null);
  const middlePanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  
  const isGenerateDisabled = isLoading || isSuggesting || (selectedCase?.requiresImage && uploadedImages.length === 0);

  return (
    <>
      <div className="main-container">
        {/* Left Panel */}
        <div className="panel left-panel" style={{ flex: panelFlex[0] }} ref={leftPanelRef}>
          <header className="app-header">
            <h1 className="app-title">Nano Banana Image Studio</h1>
          </header>
          {categories.map(category => (
            <div key={category} className="category-section">
              <button 
                className="category-button" 
                onClick={() => toggleCategory(category)}
                aria-expanded={expandedCategories[category]}
              >
                <span>{category}</span>
                <span className="category-toggle-icon">
                  {expandedCategories[category] ? '−' : '+'}
                </span>
              </button>
              {expandedCategories[category] && (
                <ul className="case-list">
                  {cases.filter(c => c.category === category).map((caseItem, index) => (
                    <li
                      key={caseItem.id}
                      className={`case-item ${selectedCase?.id === caseItem.id ? 'selected' : ''}`}
                      onClick={() => handleCaseSelect(caseItem)}
                      role="button"
                      tabIndex={0}
                      aria-pressed={selectedCase?.id === caseItem.id}
                    >
                      {index + 1}. {caseItem.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="gutter" onMouseDown={(e) => handleGutterMouseDown(0, e, [leftPanelRef.current, middlePanelRef.current, rightPanelRef.current])} />
        
        {/* Middle Panel */}
        <div className="panel middle-panel" style={{ flex: panelFlex[1] }} ref={middlePanelRef}>
          {selectedCase ? (
            <>
              <h2 className="panel-title">{selectedCaseDisplayId}. {selectedCase.name}</h2>
              <p className="case-description">{selectedCase.description}</p>
              
              <h3 className="panel-title" style={{ marginTop: '1rem' }}>이미지 업로드</h3>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                disabled={!selectedCase.requiresImage}
                multiple
              />
              <div className="image-upload-container" style={{ opacity: selectedCase.requiresImage ? 1 : 0.5 }}>
                  <div className="uploaded-images-grid">
                      {uploadedImages.map((image) => (
                          <div key={image.id} className="uploaded-image-thumbnail">
                              <img src={image.url} alt="업로드된 이미지 프리뷰" />
                              <button 
                                  onClick={() => handleRemoveImage(image.id)} 
                                  className="remove-image-button"
                                  aria-label="Remove image"
                              >
                                  &times;
                              </button>
                          </div>
                      ))}
                      {selectedCase.requiresImage && (
                          <label htmlFor="imageUpload" className="image-upload-add-button">
                              +
                              <span>{uploadedImages.length > 0 ? '추가' : '업로드'}</span>
                          </label>
                      )}
                  </div>
                  {!selectedCase.requiresImage && (
                      <div className="image-upload-disabled-overlay">
                          <p>이 케이스는 이미지가 필요 없습니다</p>
                      </div>
                  )}
              </div>


              <h3 className="panel-title" style={{ marginTop: '1rem' }}>케이스 프롬프트</h3>
              <textarea
                className="prompt-textarea"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                aria-label="Prompt for image generation"
              />
              
              <div className="suggestion-section">
                <h3 className="panel-title">프롬프트 개선 제안</h3>
                <p className="suggestion-description">추가 지시사항과 이미지를 바탕으로 AI가 더 나은 프롬프트를 제안합니다.</p>
                <textarea
                    className="prompt-textarea"
                    value={refinement}
                    onChange={(e) => setRefinement(e.target.value)}
                    placeholder="어떻게 개선할까요? (예: 더 역동적인 포즈로, 배경을 밤하늘로)"
                    aria-label="Instructions for prompt refinement"
                    style={{minHeight: '80px'}}
                />
                <button 
                    className="suggest-button" 
                    onClick={handleSuggestPrompt} 
                    disabled={isSuggesting || isLoading}
                >
                    {isSuggesting ? '제안 생성 중...' : 'AI 프롬프트 제안 받기'}
                </button>
              </div>

              <button className="generate-button" onClick={handleGenerate} disabled={isGenerateDisabled}>
                {isLoading ? '생성 중...' : '생성하기'}
              </button>
            </>
          ) : (
            <p>왼쪽 목록에서 케이스를 선택하세요.</p>
          )}
        </div>

        <div className="gutter" onMouseDown={(e) => handleGutterMouseDown(1, e, [leftPanelRef.current, middlePanelRef.current, rightPanelRef.current])} />

        {/* Right Panel */}
        <div className="panel right-panel" style={{ flex: panelFlex[2] }} ref={rightPanelRef}>
          {isLoading && (
            <div className="loader-overlay">
              <div className="loader"></div>
            </div>
          )}
          {resultImage ? (
            <div className="result-container">
              <img 
                src={resultImage} 
                alt="생성된 결과" 
                className="result-image"
                onClick={openModal}
              />
              <button className="download-button" onClick={handleDownload}>
                다운로드
              </button>
            </div>
          ) : (
             <div className="result-placeholder">
              <h2 className="panel-title">결과물</h2>
              <p>{error ? error : "생성된 이미지가 여기에 표시됩니다."}</p>
            </div>
          )}
        </div>
      </div>
       {isModalOpen && resultImage && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={resultImage} alt="확대된 결과" className="modal-image" />
            <button className="modal-close-button" onClick={closeModal} aria-label="Close modal">&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);