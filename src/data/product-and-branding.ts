
import type { Case } from './types';

export const productAndBrandingCases: Case[] = [
    {
        id: 2,
        name: "레트로 스타일 홍보 포스터",
        description: "빨강-노랑 방사형 배경에 빈티지 아트 스타일의 젊은 여성이 등장하는 레트로 포스터를 생성합니다. AI 이미지 생성 서비스를 광고합니다.",
        prompt: "A retro-style promotional poster emphasizing bold Chinese text. The background features a red-and-yellow radial burst pattern. In the center of the composition is a beautiful young woman illustrated in a refined vintage art style—she smiles warmly with a graceful, approachable presence. The poster advertises GPT’s latest AI image generation service with key slogans in Chinese, such as: “Shocking price: 9.9 per image”, “Supports all scenes, image blending, partial redrawing”, “3 revisions per image”, and “Direct AI output with no need for manual edits”. At the bottom, prominently display the call-to-action: “If you’re interested, click ‘I want this’ in the bottom-right corner”. Illustrate a hand pressing a button in the bottom-right, and place the OpenAI logo in the bottom-left.",
        category: "제품 및 브랜딩",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 8,
        name: "미니멀리스트 미래주의 포스터",
        description: "클래식 코카콜라 병 모양의 유동적인 3D 메타볼이 특징인 미니멀리스트 미래주의 전시 포스터를 생성합니다.",
        prompt: "A vertical (3:4) 4K-resolution minimalist futurist exhibition poster with an ultra-light cool gray background (#f4f4f4). At the center of the poster is a fluid 3D metaball shaped like a classic Coca-Cola bottle in full form, rendered in frosted glass with delicate grainy noise. The fluid gradient transitions from Coca-Cola Red (#E41C23) to Pearl White (#FFFFFF), giving it a silky glass-like appearance. High-position softbox lighting casts long, soft colored shadows and a subtle halo.",
        category: "제품 및 브랜딩",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 141,
        name: "제품 패키징 생성",
        description: "제품 참조 이미지와 패키징 참조 이미지를 업로드하여, 이미지 1의 디자인을 이미지 2의 캔에 적용하고 미니멀리스트 디자인 설정에 배치합니다. 전문적인 사진 촬영 스타일입니다.",
        prompt: "Apply the design from Image 1 to the can in Image 2, and place it in a minimalist design setting, professional photography",
        category: "제품 및 브랜딩",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 152,
        name: "패션 무드보드 콜라주",
        description: "참조 이미지를 업로드하여, 초상화를 모델이 착용한 개별 아이템의 컷아웃으로 둘러싼 패션 무드 보드 콜라주를 만듭니다.",
        prompt: "A fashion mood board collage. Surround a portrait with cutouts of the individual items the model is wearing. Add handwritten notes and sketches in a playful, marker-style font, and include the brand name and source of each item in English. The overall aesthetic should be creative and cute.",
        category: "제품 및 브랜딩",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 153,
        name: "섬세하고 귀여운 제품 사진",
        description: "사람의 엄지와 검지 사이에 섬세하게 들고 있는 사실적인 미니어처 [PRODUCT]의 고해상도 광고 사진을 만듭니다.",
        prompt: "A high-resolution advertising photograph of a realistic, miniature [PRODUCT] held delicately between a person's thumb and index finger.  clean and white background, studio lighting, soft shadows. The hand is well-groomed, natural skin tone, and positioned to highlight the product’s shape and details. The product appears extremely small but hyper-detailed and brand-accurate, centered in the frame with a shallow depth of field. Emulates luxury product photography and minimalist commercial style.",
        category: "제품 및 브랜딩",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 168,
        name: "상품 디자인",
        description: "참조 이미지를 업로드하여 이 캐릭터 이미지를 사용하여 상품을 만듭니다.",
        prompt: "Create merchandise using this character image.",
        category: "제품 및 브랜딩",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 182,
        name: "상품 진열대",
        description: "참조 이미지를 업로드하여 이 일러스트레이션의 배경을 제거하고 피규어와 같은 상품으로 만듭니다.",
        prompt: "Remove the background from this illustration and turn it into merchandise like figurines.\nImage: Photorealistic\nLocation:\nThe shelves of a fictional convenience store that doesn't exist in Japan. The cute, pop atmosphere is complemented by neatly arranged merchandise featuring the illustration. The store's interior is dreamily bright and special, creating a special space that excites fans.\n\nCharacters:\nThese merchandise are displayed on the shelves.\n\nMerchandise Lineup:\nTwo large, approximately 50cm-long figures in the center of the screen (for a striking display)\nAcrylic stands (deformed versions of the original artwork)\n\nChibi figures (deformed versions of the original artwork)\n\nDakimakura pillows (large prints for a striking presence)\n\nJigsaw puzzles (visual art of the characters)\n\nStationery (notebooks, pens, clear files, etc., deformed versions of the original artwork)\n\nCardboards (deformed versions of the original artwork)\n\nPlush toys (deformed versions of the original artwork)\n\nDisplay:\nThe merchandise are neatly arranged on the shelves, maintaining the atmosphere of a convenience store while still filling the space with love for the characters. They're arranged in a way that teenage female fans can't help but want to pick them up.\n\nOverall tone:\nA dreamlike merchandise sales space. Cuteness and pop are at the forefront, and despite being a convenience store, it's presented as a 'holy land for fan activities.'\nResolution: 4K, 4000px: 3000px",
        category: "제품 및 브랜딩",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 189,
        name: "미니어처 상점",
        description: "[BRAND]를 위한 작은 디오라마 상점. 지붕은 특대형 [PRODUCT]로 만들어졌고, 창문 위에는 큰 [BRAND] 로고 간판이 있습니다.",
        prompt: "Tiny diorama shop for [BRAND]. Roof made of oversized [PRODUCT], big [BRAND] logo sign above the window, vendor handing a [PRODUCT] to a customer, ground covered with many [PRODUCT]. Hand-made polymer-clay look, studio macro photo, soft light, shallow depth of field, vertical 3:4",
        category: "제품 및 브랜딩",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 191,
        name: "기차역 영화 포스터",
        description: "참조 이미지를 업로드하여 원본 이미지를 사용하여 영화 포스터를 만듭니다. 영화의 장르는 원본 이미지의 분위기에 따라 결정됩니다.",
        prompt: "Create a movie poster using the original image. The genre of the movie will be determined based on the atmosphere of the original image.\nRegardless of whether the original image is anime or live-action, the style and character design of the original image will be maintained as perfectly as possible. However, poses and expressions may be changed to match the poster design. Other people and objects may also be added at this time.\nThe final generated image will be photorealistic. This does not apply to the poster design, as it will be based on the original image.\nThe scenery of the underground passage of a Japanese station where the poster is posted will be recreated in a realistic image. People passing through the underground passage will be added.\nThe reflection of the poster is angled to make it look more realistic.",
        category: "제품 및 브랜딩",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 198,
        name: "영화 포스터 만들기",
        description: "참조 이미지를 업로드하여 업로드된 사진을 분석하고 피사체, 분위기, 분위기를 감지합니다.",
        prompt: "Analyze the uploaded photo and detect the subject, mood, and atmosphere.  \n\nBased on the detected genre and mood, generate all the following elements in English:  \n- A cinematic movie title (impactful, authentic to the genre).  \n- A short tagline or catchphrase (1–2 lines, dramatic or emotional).  \n- A credit block at the bottom (with fake names for director, producer, music, etc., styled like real movie posters).  \n- A release note such as “COMING SOON” or “In Theaters 2025.”  \n\nOverlay these elements on the image in a movie-poster style layout:  \n- Place the title prominently in the center or lower third.  \n- Place the tagline above or below the title.  \n- Add a credit block at the bottom in small text.  \n- Add the release note at the bottom center.  \n\nFinally, add the starring section at the bottom, always formatted as:  \n“Starring: ”  \n\nTypography should be bold, dramatic, and genre-appropriate.  \nThe final result must look like a genuine movie poster ready for theaters, with all elements harmonized to the photo’s mood.",
        category: "제품 및 브랜딩",
        requiresImage: true,
        taskType: 'edit'
    },
];
