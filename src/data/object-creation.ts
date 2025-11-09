
import type { Case } from './types';

export const objectCreationCases: Case[] = [
    {
        id: 1,
        name: "3D 폴라로이드 브레이크아웃 효과",
        description: "장면의 캐릭터를 3D 치비 스타일 피규어로 변환하여 폴라로이드 사진 안에 배치합니다. 캐릭터가 사진 프레임을 뚫고 나오는 효과를 연출합니다.",
        prompt: "Convert the character in the scene into a 3D chibi-style figure, placed inside a Polaroid photo. The photo paper is being held by a human hand. The character is stepping out of the Polaroid frame, creating a visual effect of breaking through the two-dimensional photo border and entering the real-world 3D space.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 7,
        name: "레고 수집용 피규어",
        description: "업로드된 사진을 기반으로 클래식 레고 미니피규어 스타일의 미니어처 장면을 생성합니다. 사용자와 어울리는 동물이 함께 배치됩니다.",
        prompt: "Generate a vertically-oriented image based on my uploaded photo, using the following prompt: Classic LEGO minifigure style in a miniature scene — an animal stands beside me. The color palette of the animal should match mine. Please design the animal based on your understanding of me. The entire scene is set within a transparent glass cube, with a minimalist interior design.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 11,
        name: "3D 커플 보석함 피규어",
        description: "사진 속 인물을 기반으로 파스텔 톤의 로맨틱한 프레젠테이션 상자 안에 전시된 3D 렌더링 수집용 피규어를 만듭니다.",
        prompt: "Create a finely crafted, adorably charming 3D-rendered collectible figure based on the subjects in the photo, displayed inside a pastel-toned, warm and romantic presentation box. The box is designed in a soft cream color with gentle gold accents, resembling an elegant portable jewelry case. When opened, the box reveals a heartwarming romantic scene: two chibi-style characters gazing sweetly at each other.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 13,
        name: "원피스 테마 피규어 제작",
        description: "사진 속 인물을 원피스 테마의 애니메이션 스타일 액션 피규어로 변환하여 수집용 피규어 상자 안에 전시합니다.",
        prompt: "Transform the person in the photo into a One Piece-themed anime-style action figure, presented inside a collectible figure box designed in the visual style of the One Piece universe. The box is shown in an isometric view. Inside the box, display the character reimagined in the One Piece anime art style, posed dynamically and accompanied by essential everyday items such as a pistol, a wristwatch, a suit, and leather shoes — all miniaturized and arranged like collectible accessories.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 15,
        name: "애니메이션 스타일 배지",
        description: "첨부된 사진 속 인물을 기반으로 애니메이션 스타일의 배지 사진을 생성합니다. 술(태슬) 재질의 원형 모양입니다.",
        prompt: "Based on the person in the attachment, generate a photo of an anime-style badge. Requirements:\nMaterial: Tassel\nShape: Circular\nMain subject: A hand holding the badge",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 18,
        name: "장난감 상자 속 국가 디오라마",
        description: "베이지색 판지 상자 안에 [국가 이름]의 미니어처 풍경이 담긴 3D 프린트 디오라마의 초현실적인 탑다운 사진을 생성합니다.",
        prompt: "An ultra-realistic top-down photograph of a 3D-printed diorama inside a beige cardboard box, with the lid being held open by a human hand. The interior of the box reveals a miniature landscape of [COUNTRY NAME], featuring iconic landmarks, terrain, buildings, rivers, vegetation, and crowds of tiny, detailed human figures.",
        category: "객체 생성 및 통합",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 19,
        name: "액션 피규어와 실제 인물 동시 프레임",
        description: "책상 위에 놓인 [성룡]의 애니메이션 피규어와 실제 인물이 같은 프레임 안에서 비슷한 포즈를 취하는 장면을 연출합니다.",
        prompt: "In a casual, everyday style as if shot on a mobile phone, an anime figure of [Jackie Chan] is placed on a desk, striking an exaggerated and cool pose, fully equipped. Simultaneously, the corresponding real-life person also appears in the frame, striking a similar pose to the figure, creating an interesting visual contrast with the figure and the real person in the same frame.",
        category: "객체 생성 및 통합",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 20,
        name: "치비 캐릭터 스티커 팩",
        description: "참고 이미지의 캐릭터를 주인공으로 한 9개의 치비 스티커 세트를 3x3 격자로 만듭니다.",
        prompt: "Please create a set of 9 Chibi stickers featuring [the character in the reference image], arranged in a 3x3 grid. Design requirements: Transparent background. 1:1 square aspect ratio. Consistent Chibi Ghibli cartoon style with vibrant colors. Each sticker must have a unique action, expression, and theme, reflecting diverse emotions like 'sassy, mischievous, cute, frantic'.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 101,
        name: "일러스트를 피규어로 변환",
        description: "참고 이미지를 업로드하여 캐릭터 피규어를 생성합니다. 캐릭터 이미지가 인쇄된 상자와 모델링 과정이 보이는 컴퓨터 화면이 배경에 배치됩니다.",
        prompt: "turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 106,
        name: "다중 참조 이미지 생성",
        description: "여러 참조 이미지(인물, 가방, 자동차, 애완동물 등)를 결합하여 하나의 일관된 장면을 생성합니다.",
        prompt: "A model is posing and leaning against a pink bmw. She is wearing the following items, the scene is against a light grey background. The green alien is a keychain and it's attached to the pink handbag. The model also has a pink parrot on her shoulder. There is a pug sitting next to her wearing a pink collar and gold headphones.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 110,
        name: "커스텀 캐릭터 스티커",
        description: "캐릭터 이미지를 웹 일러스트 스타일로 변환하고, 장난스러운 흰색 외곽선과 짧은 문구를 추가하여 스티커를 만듭니다.",
        prompt: "Help me turn the character into a white outline sticker similar to Figure 2. The character needs to be transformed into a web illustration style, and add a playful white outline short phrase describing Figure 1.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 117,
        name: "커스텀 대리석 조각상",
        description: "참고 이미지를 업로드하여 빛나는 대리석으로 만든 초정밀 조각상의 사실적인 이미지를 생성합니다.",
        prompt: "A photorealistic image of an ultra-detailed sculpture of the subject in image made of shining marble. The sculpture should display smooth and reflective marble surface, emphasizing its luster and artistic craftsmanship. The design is elegant, highlighting the beauty and depth of marble. The lighting in the image should enhance the sculpture's contours and textures, creating a visually stunning and mesmerizing effect",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 121,
        name: "OOTD 의상",
        description: "인물 이미지와 의류 이미지를 업로드하여 인물에게 의류 및 액세서리를 입히고, 자연스러운 조명의 야외에서 촬영한 OOTD 스타일 사진을 생성합니다.",
        prompt: "Choose the person in Image 1 and dress them in all the clothing and accessories from Image 2. Shoot a series of realistic OOTD-style photos outdoors, using natural lighting, a stylish street style, and clear full-body shots. Keep the person's identity and pose from Image 1, but show the complete outfit and accessories from Image 2 in a cohesive, stylish way.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 123,
        name: "다중 뷰 결과 생성",
        description: "참고 이미지를 업로드하여 전면, 후면, 좌측, 우측, 상단, 하단 뷰를 흰색 배경에 균등한 간격으로 생성합니다.",
        prompt: "Generate the Front, Rear, Left, Right, Top, Bottom views on white. Evenly spaced. Consistent subject. Isometric Perspective Equivalence.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 132,
        name: "액션 피규어",
        description: "참고 이미지를 업로드하여 'AI Evangelist - Kris'라는 문구가 적힌 액션 피규어를 만듭니다. 커피, 거북이, 노트북, 휴대폰, 헤드폰이 특징입니다.",
        prompt: "make an action figure of me that says [“AI Evangelist - Kris”] and features [coffee, turtle, laptop, phone and headphones]",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 145,
        name: "레고 미니피규어",
        description: "참고 이미지를 업로드하여 사진 속 인물을 레고 미니피규어 포장 상자 스타일로 변환합니다. 아이소메트릭 관점으로 제시됩니다.",
        prompt: "Transform the person in the photo into a LEGO minifigure packaging box style, presented in isometric perspective. Label the box with the title 'ZHOGUE'. Inside the box, display the LEGO minifigure based on the person in the photo, along with their essential items (such as makeup, bags, or other items) as LEGO accessories. Beside the box, also display the actual LEGO minifigure itself, unpackaged, rendered in a realistic and vivid style.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 146,
        name: "건담 모델 피규어",
        description: "참고 이미지를 업로드하여 사진 속 인물을 건담 모델 키트 포장 상자 스타일로 변환합니다. 아이소메트릭 관점으로 제시됩니다.",
        prompt: "Transform the person in the photo into a Gundam model kit packaging box style, presented in isometric perspective. Label the box with the title 'ZHOGUE'. Inside the box, display a Gundam-style mechanical version of the person from the photo, along with their essentials (such as makeup, bags, or other items) redesigned as futuristic mechanical accessories. The packaging should resemble real Gunpla boxes, including technical illustrations, instruction manual-style details, and sci-fi fonts. Beside the box, also display the actual Gundam-style mechanical figure itself, outside the packaging, rendered in a realistic and lifelike style, similar to official Bandai promotional renders.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 147,
        name: "하드웨어 분해도",
        description: "DSLR의 모든 액세서리와 내부 구성 요소를 보여주는 분해도를 생성합니다.",
        prompt: "Exploded view of a DSLR showing all its accessories and internal components such as lens, filter,  internal components, lens, sensor, screws, buttons, viewfinder, housing, and circuit board. Maintain red accents of the DSLR",
        category: "객체 생성 및 통합",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 154,
        name: "애니메이션 동상을 현실에 배치",
        description: "참조 이미지를 업로드하여 이 사람의 거대한 동상이 도쿄 중심의 광장에 배치되고 사람들이 올려다보는 사실적인 사진 작품을 만듭니다.",
        prompt: "A realistic photographic work. A gigantic statue of this person has been placed in a square in the center of Tokyo, with people looking up at it.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 155,
        name: "이타샤 자동차 만들기",
        description: "참고 이미지를 업로드하여 유명 관광지나 경치 좋은 랜드마크에서 촬영된, 이타샤(페인팅된 자동차) 디자인으로 애니메이션 스타일 캐릭터 아트워크가 있는 스포티한 자동차의 전문적인 사진을 만듭니다.",
        prompt: "Create a professional photograph of a sporty car with anime-style character artwork as itasha (painted car) design, shot at a famous tourist destination or scenic landmark. The car features large, prominently displayed anime character illustrations with simple, clean design composition. The character artwork should be painted in vibrant anime art style with bold colors and clear details. Position the vehicle at a recognizable tourist spot or scenic location with good natural lighting that showcases both the car's sporty appearance and the character artwork. Use professional automotive photography techniques with proper depth of field to highlight the itasha design while incorporating the scenic background for tourism appeal, suitable for promotional or enthusiast marketing materials.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 160,
        name: "재질 구체를 로고에 적용",
        description: "참조 이미지와 재질 구체 이미지를 업로드하여, 이미지 2의 재질을 이미지 1의 로고에 적용하고 3D 객체로 표현합니다. C4D와 유사한 스타일로 렌더링되며 단색 배경을 사용합니다.",
        prompt: "Apply the material from Image 2 to the logo in Image 1, present it as a 3D object, render in a C4D-like style, with a solid-color background.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 164,
        name: "장면 A6 접이식 카드",
        description: "참조 이미지를 업로드하여 열었을 때 미니어처 종이 정원과 분재 나무가 있는 완전한 3D 구형 작은 집을 드러내는 A6 접이식 카드를 그립니다.",
        prompt: "Draw an A6 folding card: when opened, it reveals a complete 3D spherical tiny house with a miniature paper garden and a bonsai tree inside.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 165,
        name: "체스 세트 디자인",
        description: "참고 이미지를 업로드하여 이 이미지에서 영감을 받은 체스판과 3D 프린팅 가능한 체스 말을 그립니다.",
        prompt: "Draw a chessboard and a set of 3D-printable chess pieces inspired by this image.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 167,
        name: "보석 컬렉션 디자인",
        description: "참고 이미지를 업로드하여 이 이미지를 5피스 보석 컬렉션으로 변환합니다.",
        prompt: "Transform this image into a 5-piece jewelry collection.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 170,
        name: "거대 피규어 비계",
        description: "사람의 참조 사진을 업로드하여, 이미지 속 인물이 서서 셀카를 찍는 초현실적인 3D 렌더링을 만듭니다. 거대한 피규어는 거대한 비계로 둘러싸여 있으며, 많은 작은 건설 노동자들이 작업하고 있습니다.",
        prompt: "A hyper-realistic 3D render of the person in the image standing and taking a selfie. \nThe giant figure is surrounded by massive scaffolding, with many tiny construction workers working on it. \nThe scene is set in a city square, surrounded by modern buildings, moving vehicles (cars, buses), pedestrians, \nand a bright clear blue sky. The overall details are rich, presenting a photo-realistic texture with cinematic lighting effects.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 172,
        name: "구성 요소 추출",
        description: "모델 이미지를 업로드하여 각 구성 요소를 잘라내고 홀로그램을 유지하는 모델 시트를 만듭니다.",
        prompt: "Cut out each component and create a model sheet that retains the hologram.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 177,
        name: "맞춤 캐릭터 이모티콘 팩 생성",
        description: "참조 이미지를 업로드하여 이미지 2의 캐릭터를 사용하여 이미지 1의 다양한 포즈를 기반으로 [x]개의 이모티콘 스티커를 생성합니다.",
        prompt: "Using the character from Image 2, generate [x] emoji stickers based on various poses from Image 1.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 180,
        name: "모델 단면도",
        description: "참조 이미지를 업로드하여 이 자동차의 단면 시각화를 만듭니다. 한쪽은 외부가 그대로 보이고, 다른 쪽은 내부 엔진과 좌석이 노출됩니다.",
        prompt: "Create a cutaway visualization of this car, show exterior intact on one side, and interior engine + seats exposed on the other side. Keep proportions accurate and details realistic.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 184,
        name: "라인 아트를 낙서 그림으로",
        description: "참조 이미지를 업로드하여 업로드된 그림책이 다섯 살 아이가 그린 것처럼 보이게 만듭니다.",
        prompt: "Make the uploaded picture book look as if it was drawn by a five-year-old child.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 188,
        name: "유리병 기념품",
        description: "참조 이미지를 업로드하여 사진 속 캐릭터의 1/7 스케일 상용화 소장용 피규어를 만듭니다. 매우 사실적인 스타일로 제작됩니다.",
        prompt: "A 1/7 scale commercialized collectible figure of the character from the photo, crafted in a highly realistic style. The figure is placed in a detailed beach environment with sand, seashells, and gentle ocean waves. The entire toy display is enclosed inside a clear souvenir glass bottle, giving it a premium miniature diorama look, with realistic lighting and shadows",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 196,
        name: "별자리 이미지 만들기",
        description: "참조 이미지를 업로드하여 원본 이미지를 참조하여 가상의 별자리 이미지를 만듭니다.",
        prompt: "Create an image depicting fictional constellations using the original image as a reference.\n- A photorealistic starry sky. This is maintained even if the original image is anime-style.\n- People, animals, and objects extracted from the original image are placed transparently against the starry sky background. In this case, the extracted target should be a single motif that is the main theme. Also, only one image should be placed.\n- The character design, style, and taste of the original image are faithfully reproduced. The background of the original image can be ignored.\n- An imaginary constellation is created based on the placed motif. This constellation is made up of approximately 5 to 10 stars.\n- The pose of the original image is analyzed, and the stars belonging to the constellation are appropriately positioned in distinctive parts.\n- The stars belonging to the constellation are highlighted, and the stars are connected with glowing lines.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 203,
        name: "맞춤형 인형 뽑기 기계",
        description: "참조 이미지를 업로드하여 이 동물을 단순화하고 변형된 애니메이션 같은 봉제 인형으로 보여주는 이미지를 생성합니다. 여러 개가 UFO 캐쳐 기계 안에 있습니다.",
        prompt: "Generate an image showing this animal as a simplified and deformed as an anime-like plush toy (made of short-pile, soft-touch polyester knit fabric), with multiple units inside a UFO catcher machine. On either side are additional UFO Catcher machines containing multiple plush toys of different animals, distinct from the main image. The setting is a Japanese game center, with an overall very bright impression. Only the top section of the UFO catcher is painted in vibrant colors. The lower section is painted white. The background is a wall, and the area behind the UFO catcher is quite blurred.　The floor is carpeted. The shooting angle is from the front. Most importantly, absolutely no text or logos should appear in the output.",
        category: "객체 생성 및 통합",
        requiresImage: true,
        taskType: 'edit'
    },
];
