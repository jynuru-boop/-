
import type { Case } from './types';

export const conceptArtCases: Case[] = [
    {
        id: 5,
        name: "포털을 통과하는 캐릭터",
        description: "사진 속 인물을 3D 치비 스타일로 변환하여 빛나는 포털을 통과하며 시청자의 손을 잡는 장면을 연출합니다.",
        prompt: "A 3D chibi-style version of the person in the photo is stepping through a glowing portal, reaching out and holding the viewer’s hand. As the character pulls the viewer forward, they turn back with a dynamic glance, inviting the viewer into their world. Behind the portal is the viewer’s real-life environment: a typical programmer’s study with a desk, monitor, and laptop, rendered in realistic detail. Inside the portal lies the character’s 3D chibi world, inspired by the photo, with a cool blue color scheme that sharply contrasts with the real-world surroundings.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 108,
        name: "손그림으로 다중 캐릭터 포즈 제어",
        description: "캐릭터 이미지와 손으로 그린 스케치를 업로드하여 스케치에 따라 캐릭터들이 싸우는 포즈를 연출합니다.",
        prompt: "Have these two characters fight using the pose from Figure 3. Add appropriate visual backgrounds and scene interactions,Generated image ratio is 16:9",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 112,
        name: "캐릭터 디자인 시트 생성",
        description: "참고 이미지를 기반으로 캐릭터의 비율, 3면도, 표정, 포즈, 의상 디자인 시트를 생성합니다.",
        prompt: "Generate character design for me (Character Design)\n\nProportion design (different height comparisons, head-to-body ratio, etc.)\n\nThree views (front, side, back)\n\nExpression design (Expression Sheet) → like the image you sent\n\nPose design (Pose Sheet) → various common poses\n\nCostume design (Costume Design)",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 117,
        name: "영화 스토리보드 제작",
        description: "두 캐릭터가 등장하는 흑백 필름 느와르 탐정 이야기의 12개 파트 스토리보드를 생성합니다. 사라진 보물을 찾아가는 스릴 넘치는 이야기입니다.",
        prompt: "Create an addictively intriguing 12 part story with 12 images with these two characters in a classic black and white film noir detective story. Make it about missing treasure that they get clues for throughout and then finally discover. The story is thrilling throughout with emotional highs and lows and ending on a great twist and high note. Do not include any words or text on the images but tell the story purely through the imagery itself.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 124,
        name: "영화 스토리보드",
        description: "참고 이미지를 업로드하여 두 캐릭터가 등장하는 12개의 이미지로 구성된 흑백 필름 누아르 탐정 이야기를 만듭니다.",
        prompt: "Create an addictively intriguing 12 part story with 12 images with these two characters in a classic black and white film noir detective story. Make it about missing treasure that they get clues for throughout and then finally discover. The story is thrilling throughout with emotional highs and lows and ending on a great twist and high note. Do not include any words or text on the images but tell the story purely through the imagery itself.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 126,
        name: "선화에서 이미지 생성",
        description: "선화와 참고 이미지를 업로드하여, 그림 1의 인물 포즈를 그림 2의 포즈로 변경하고 전문 스튜디오에서 촬영합니다.",
        prompt: "Change the pose of the person in Figure 1 to that of Figure 2, and shoot in a professional studio",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 131,
        name: "만화책 만들기",
        description: "참고 이미지를 업로드하여 업로드된 이미지를 기반으로 만화책 스트립을 만들고, 텍스트를 추가하고, 설득력 있는 이야기를 작성합니다. 슈퍼히어로 만화책을 원합니다.",
        prompt: "Based on the uploaded image, make a comic book strip, add text, write a compelling story. I want a superhero comic book.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 134,
        name: "참조 이미지로 캐릭터 표정 제어",
        description: "캐릭터 참조 이미지와 표정 참조 이미지를 업로드하여, 이미지 1의 캐릭터를 이미지 2의 표정으로 변경합니다.",
        prompt: "Character reference from Image 1 / Change to the expression from Image 2",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 135,
        name: "일러스트 드로잉 과정 4패널",
        description: "캐릭터 참조 이미지를 업로드하여 캐릭터의 4패널 드로잉 과정을 생성합니다: 1단계: 선화, 2단계: 평면 색상, 3단계: 그림자 추가, 4단계: 다듬고 완성. 텍스트 없음.",
        prompt: "Generate a four-panel drawing process for the character: Step 1: Line art, Step 2: Flat colors, Step 3: Add shadows, Step 4: Refine and complete. No text.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 140,
        name: "다중 캐릭터 포즈 생성",
        description: "캐릭터 참조 이미지를 업로드하여 이 일러스트레이션의 포즈 시트를 만들고, 다양한 포즈를 만듭니다!",
        prompt: "Please create a pose sheet for this illustration, making various poses!",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 151,
        name: "고대 지도 → 역사적 장면 사진",
        description: "역사적인 참조 이미지를 업로드하여, 오늘날 촬영된 사진처럼 현대적인 색상으로 재현합니다.",
        prompt: "full colour photograph. New Amsterdam in 1660. make sure it's full modern colors as if it's a photograph taken today.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 156,
        name: "만화 구성",
        description: "캐릭터 참조 이미지와 장면 구성 참조 이미지를 업로드하여 만화의 한 장면을 구성합니다.",
        prompt: "이 이미지를 기반으로 만화 구성을 만드세요.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 158,
        name: "아이소메트릭 홀로그램 와이어프레임",
        description: "선화 참조 이미지를 업로드하여, 업로드된 이미지를 기반으로 와이어프레임 선만 사용하여 홀로그램 묘사로 변환합니다.",
        prompt: "Based on the uploaded image, convert it into a holographic depiction using wireframe lines only.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 169,
        name: "모델 홀로그램 프로젝션",
        description: "초현실적인 제품 사진. 현대적인 책상 위에 놓인 원형 홀로그램 프로젝터 위에 떠 있는 가상 홀로그램 캐릭터 [CHARACTER].",
        prompt: "Ultra-realistic product photo.  \nSubject: virtual holographic character [CHARACTER], floating above a circular hologram projector Ø120 mm placed on a modern desk.  \n\nProjection source rules:  \n- If input reference is a 3D object → show a desktop 3D scanner beside the projector.  \n  Place the reference object on the scanner plate.  \n  The hologram above the projector is generated from this scanned object.  \n- If input reference is a 2D image → show a modern PC with monitor on the desk.  \n  Display the reference image on the monitor screen.  \n  The hologram above the projector is generated from this screen content.  \n\nHologram rendering rules:  \n- Character always appears as a semi-transparent volumetric image, background faintly visible through.  \n- No beams, no particles, no solid statue surfaces.  \n- Balanced anatomy (1/7–1/8 head-to-body ratio), correct proportions.  \n- Natural pose with clear silhouette.  \n- Hair, outfit folds, and accessories visible but translucent.  \n- Face crisp and expressive, readable at 1000 px crop.  \n- No copyrighted characters, no branded designs, no IP logos.  \n\nEnvironment: modern desk with projector base + conditional device (scanner or monitor).  \nCamera: 85–100 mm lens, 3/4 hero angle, eye-level, f/11–f/16, ISO100, tripod.  \nLighting: desk softly illuminated; holographic figure defined only by volumetric light.  \nBackground: seamless black studio with subtle reflections.  \n\nOutput: 4:5, 2048×2560.  \n\nNegative: text-free, watermark-free, logo-free, brand-free, copyrighted characters, franchise IP, trademarked designs, resin, PVC, physical statue, opaque surfaces, toy gloss, beams, scanlines, dots, distortion, extra digits.  \nSampling: deterministic, seed=12345, temperature=0.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 176,
        name: "교육용 만화",
        description: "중학생들에게 '선물' 개념을 설명하기 위해 여러 장의 16:9 낙서 스타일 이미지를 생성합니다. 이미지들은 일관된 다채로운 두꺼운 연필 손그림 스타일을 가져야 합니다.",
        prompt: "Help me generate multiple 16:9 doodle-style images to explain the concept of 'futures' to middle school students. The images should have a consistent colorful, thick-pencil hand-drawn style, be rich in information, feature English text, use solid color backgrounds, have outlines around the cards, and include uniform titles, similar to a PowerPoint presentation.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 181,
        name: "해적 현상 수배 포스터",
        description: "참조 이미지를 업로드하여 원본 이미지를 사용하여 양피지에 그린 해적의 현상 수배 포스터를 재현합니다.",
        prompt: "Using the original image, recreate a pirate's wanted poster drawn on parchment.\nBrown monochrome, with the texture of aged parchment.\nRetain the style and character design of the original image down to the smallest detail, and paste it large at the top of the wanted poster.\nA close-up of the face. Have the character wear a pirate hat.\nWrite the bounty amount at the bottom of the poster. The bounty amount will be random, and a fictitious currency unit will be used.\nBelow the bounty amount, write the crime in small letters. Use a fictitious language. English or Chinese characters may not be used.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 186,
        name: "다크 고딕 타로 카드",
        description: "참조 이미지를 업로드하여 이 이미지의 나를 주인공으로 하는 다크 고딕 타로 카드를 생성합니다. ['AI 아티스트 - 시라']와 [커피, 흰색 푹신한 통통한 고양이, 노트북, 휴대폰, 헤드폰]을 상징으로 포함합니다.",
        prompt: "Generate a dark gothic tarot card featuring me from this image. Include [“AI Artist - Shira”] and [coffee, white fluffy chubby cat with pink bow, laptop, phone, headphones] as symbols, with moody shadows, intricate gothic borders, and mystical dark fantasy vibes.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 187,
        name: "흑백 진화 차트",
        description: "가장 초기의 유인원에서 인간으로, 그리고 마지막으로 바나나로 진화하는 과정을 보여주는 미니멀리스트 흑백 스타일의 진화 진행 차트를 생성합니다.",
        prompt: "Generate an evolutionary progression chart in a minimalist black-and-white style, \nshowing the evolution from the earliest apes to humans and finally into a banana.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 201,
        name: "어안 렌즈 피폴 일러스트",
        description: "참조 이미지를 업로드하여 문 피폴을 통해 보는 것처럼 원형으로 왜곡된 뷰의 초정밀 애니메이션 일러스트를 만듭니다.",
        prompt: "ultra-detailed anime illustration, fisheye lens peephole perspective, circular distorted view as if looking through a door peephole, warped wide-angle effect with curved edges, darkened vignette around the circular\nframe, two people leaning their faces close to the peephole trying to peek through, both with mischievous playful smiles, exaggerated perspective distortion making their features appear larger and curved, faces\napproaching the peephole lens, hallway or room interior bent by the lens effect, slightly blurry edges mimicking actual peephole optics, playful atmosphere, 8k resolution",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 207,
        name: "펜 디스플레이에 그리기",
        description: "참조 이미지를 업로드하여 사실적인 펜 태블릿 화면을 만듭니다. 펜 태블릿과 펜을 든 사실적인 1인칭 손이 있습니다.",
        prompt: "Photorealistic pen tablet screen. Realistic first-person hand holding the pen tablet and pen.\nThe original image is reproduced on the pen tablet in an unfinished state. The line art has been extracted from the original image. Portions of the line art have been colored with the same coloring as the original image. Unfinished coloring. Must not be monochrome. About 70% of the coloring is done.\nClose-up. The pen tip is touching the tablet screen.",
        category: "컨셉 아트 및 일러스트",
        requiresImage: true,
        taskType: 'edit'
    },
];
