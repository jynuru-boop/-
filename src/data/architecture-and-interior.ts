
import type { Case } from './types';

export const architectureAndInteriorCases: Case[] = [
    {
        id: 6,
        name: "개인화된 방 디자인",
        description: "침실, 책장, 소파 등이 있는 아늑한 3D 스타일의 방을 아이소메트릭 뷰로 디자인합니다.",
        prompt: "Design a cozy bedroom in a cute 3D style with C4D-quality rendering, presented in an isometric view. The room includes a bed, bookshelf, sofa, green plants, a computer desk, and a computer setup. A framed painting hangs on the wall. Outside the window, a nighttime cityscape is visible with glowing buildings and a dark sky.",
        category: "건축 및 인테리어",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 104,
        name: "3D 건물 추출/아이소메트릭 모델 제작",
        description: "이미지 속 특정 객체(건물, 차량 등)만 추출하여 아이소메트릭 스타일로 변환합니다.",
        prompt: "Make Image Daytime and Isometric [Building Only]",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 133,
        name: "지도를 아이소메트릭 건물로",
        description: "지도 참조 이미지를 업로드하여 이 위치를 가져와 랜드마크를 게임 테마파크 스타일의 아이소메트릭 이미지(건물만)로 만듭니다.",
        prompt: "Take this location and make the landmark an isometric image (building only), in the stvle of the game Theme Park",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 159,
        name: "마인크래프트 스타일 장면 생성",
        description: "구글 지도 참조 이미지를 업로드하여, 이 위치를 사용하여 랜드마크(건물만)의 아이소메트릭 HD-2D 마인크래프트 스타일 이미지를 만듭니다.",
        prompt: "Using this location, create an isometric HD-2D Minecraft-style image of the landmark (buildings only).",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 161,
        name: "평면도 3D 렌더링",
        description: "평면도 참조 이미지를 업로드하여 이 주거용 평면도를 집의 아이소메트릭, 사실적인 3D 렌더링으로 변환합니다.",
        prompt: "Convert this residential floor plan into an isometric, photo-realistic 3D rendering of the house.",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 171,
        name: "원격 탐사 이미지에서 건물 추출",
        description: "원격 탐사 이미지를 업로드하여 건물 이외의 모든 것을 제거합니다.",
        prompt: "Remove everything in the image except the buildings.",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 175,
        name: "이미지에서 미니어처 장면 생성",
        description: "참조 이미지를 업로드하여 이미지를 아이소메트릭 뷰로 변환합니다.",
        prompt: "Convert the image to isometric view",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 183,
        name: "코믹콘 부스",
        description: "참조 이미지를 업로드하여 배경을 지우고 캐릭터를 코스플레이어와 캐릭터 상품으로 바꿉니다.",
        prompt: "Erase the background and replace the characters with the following:\n\nCosplayers and Character Goods\n\nCharacter/Motif:\nCharacter goods based on the illustration\n\nHairstyle, Eyes, and Appearance:\n(Focus on merchandise, not the character itself.)\n\nMain Character: A cosplayer is holding a figurine in the center of the screen.\n\nLocation:\nComic Market (a doujinshi sales event).\nA spacious booth is filled with merchandise lined up on tables and shelves. The atmosphere is filled with excitement and anticipation.\n\nMerchandise Lineup:\n• A large, approximately 100cm figure is displayed in the center of the booth, creating an eye-catching display.\n• The character is displayed on an 80-inch LCD panel.\n• Acrylic Stands\n• Chibi Figures (Deformed)\n• Body Pillows (Large, Full-Length Character Print)\n• Jigsaw Puzzles (Using Character Artwork)\n• Stationery (Notebooks, Pens, Clear Files, etc.)\n• Desk Pads\n• Plush Toys (Deformed)\nExhibition/Display:\n• Goods neatly arranged throughout the booth, creating a unified look.\n• Utilizing desks and shelves reminiscent of doujinshi sales events, the layout encourages fans to pick up items.\n• With the energy of the visitors as a backdrop, the venue is presented as a special 'fan sanctuary.'\nOverall Tone:\nA dreamlike sales space.\nWhile emphasizing cuteness and pop, the space evokes the unique enthusiasm of doujin events and the feeling of a 'sanctuary for fan activities.'\nSwarms of people.\n\nImage Quality:\nPhotorealistic, 4K (4000px x 3000px)",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 185,
        name: "현대 미술 전시 공간",
        description: "참조 이미지를 업로드하여 참조 이미지를 테마로 한 아방가르드 현대 미술 전시 공간을 만듭니다.",
        prompt: "An avant-garde contemporary art exhibition space themed around the reference image.\nThe entire exhibition hall (20.0 m x 20.0 m x 8.0 m) integrates architecture, lighting, flooring, walls, \nand ceiling into the artistic expression.\n\nAt the far end of the hall stands a massive wall 20 meters wide and 8 meters high. \nIn the center of this wall, the theme from the reference image is presented in a monumental artistic form. \nThe image is vivid and three-dimensional, rising toward the viewer, becoming the focal point of the entire space.\n\nA system-generated exhibition title plaque is installed below the central wall. \nThe title must be abstract, symbolic, and poetic, and must reflect a contemporary artwork. \nNo price display is provided.\n\nThe floor is polished granite with a reflectance of 0.35–0.40. \nPatterns and light derived from the reference image cascade across the surface of the work, \nresonating with the entire space as if responding to the footsteps of visitors. \nTactile paving bricks are in a similar color, seamlessly integrated, but only 5 mm high, providing a clear texture. \nThe work extends in a straight line from the entrance to the wall, creating a pause point before the artwork. \nAfter viewing, visitors are naturally guided to an opening on the right side (3 m wide x 3 m high). \nIn emergencies, floor-level emergency lighting ensures illumination of 1 lux.\n\nThe left and right walls and the ceiling each reinterpret an abstract element from the reference image, \ntransforming the entire space into a single artwork. \nThe flow of color, form, and light unifies the experience into an artistic whole.\n\nVisitor capacity is limited to 8–25 people. \nAll visitors face the large wall, moving in a straight line and pausing at the designated point. \nNo one looks back toward the entrance. \nOnly one staff member is stationed near the right-side entrance beside the wall. \nAll faces are blurred to ensure anonymity.\n\nThe composition is stable, with the central vanishing point always aligned with the center of the wall. \nVerticality is within ±0.5°. \nFloor reflections are precise, human figures appear natural. \nHands always show five fingers, eyes are symmetrical within a 3% margin. \nFabrics remain flat with no deformation.\n\nForbidden content: Elements unrelated to the reference image, missing or broken tactile paving, \nvisitors facing the entrance, logos or watermarks, overcrowding, toy-like gloss, 2D flat projections, \nneon glow, teal-orange tones, oversaturation, perspective collapse, mismatched reflections, \nanatomical anomalies, extra limbs, distorted faces, excessive outlines, banding, or vignetting.\n\nDoD: The entire venue will be a contemporary artwork centered on the theme of the reference image, \nwith the innermost structure forming a unified experience. \nThe tactile paving synchronizes perfectly with the flow of light, creating a clear pause point. \nVisitors are immersed in the space itself, and even in reproduction, SSIM will remain stable at 0.95 or above.",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 192,
        name: "영화 라운지",
        description: "참조 이미지를 업로드하여 사실적인 영화관 라운지를 만듭니다. 팝콘 스탠드를 배경으로 한 특별 이벤트 테마 공간은 캐릭터의 세계로 꾸며져 있습니다.",
        prompt: "Illustration Processing:\nThe background is removed and the characters are turned into figurines and merchandise.\nTheme / Overview:\nA photorealistic movie theater lounge. A special event-themed space, set in a popcorn stand, is decorated with the world of the characters.\n\nLocation:\nA spacious popcorn stand in a large movie theater.\nThere is a cash register, with a popcorn machine inside.\nThere is a drink stand with a salesperson behind the counter.\nAbove the register are countless posters of showing movies.\n\nCharacters / Production:\nA character cosplayer is placed in the center of the screen.\nMerchandise such as figurines and acrylic stands are displayed on shelves.\nGiant stuffed animals and signboards are displayed realistically.\nA movie photo booth is set up and decorated with character designs.\n\nPlaces where characters are reflected:\nMovie posters currently being screened.\nPop-up advertisements for the collaboration menu.\nDrink cups and packaging.\nPopcorn buckets.\nLarge LED LCD panel.\n\nDesign / Advertising:\nCharacter illustrations are reflected on each poster in the lounge.\nVivid visuals of the collaboration food and drinks are displayed.\nAnimations and character footage are projected onto LED panels.\n\nCamera Angle:\nComposed from the front.\nEmphasis on the entire popcorn stand.\nA cosplayer is placed in the center, with merchandise and advertisements reflected around them.\nA slightly lower angle captures the LED panels and posters impressively.\n\nQuality / Atmosphere:\nPhotorealistic and detailed depiction.\nAn urban, realistic glossy feel, creating a cinema-like atmosphere with an event-like feel.\nResolution is 4K, aspect ratio is 4:3.",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 194,
        name: "캐릭터 테마 기차",
        description: "참조 이미지를 업로드하여 사실적인 도쿄 기차 내부를 만듭니다. 전체 차량은 캐릭터 광고와 상품으로 장식되어 콜라보레이션 이벤트를 위해 맞춤 제작된 특별한 공간을 만듭니다.",
        prompt: "Illustration Processing:\nThe background is erased and characters are turned into figurines and merchandise.\nTheme / Overview:\nA photorealistic Tokyo train interior. The entire car is decorated with character advertisements and merchandise, creating a special space tailored for a collaboration event.\nCharacters / Production:\nSeveral character cosplayers are standing in the foreground of the screen.\nLife-size panels and life-size figures are displayed in the center and back of the train.\n100cm character figures are on display.\nMany character stuffed toys are lined up in empty seats.\nAdvertising / Display:\nCharacter illustrations are reflected in advertisements on the straps.\nCharacter illustrations are displayed on poster advertisements inside the train.\nCharacter illustrations and animations are displayed on additional LED displays installed inside the train.\nIllustration Processing:\nThe background is erased and characters are turned into figurines and merchandise.\nNear-life-size figures, 100cm figures, deformed figures, and stuffed toys are realistically depicted.\nCamera Angle:\nA frontal composition emphasizes the bustling atmosphere inside the train.\nA large shot of a cosplayer in the foreground, with figures, panels, and stuffed animals in the background.\nA low angle captures the strap advertisements and LED displays impressively.\nQuality / Atmosphere:\nPhotorealistic and detailed depiction.\nAn urban, realistic glossy feel.\nResolution is 4K, aspect ratio is 4:3.",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 195,
        name: "맞춤형 테마파크",
        description: "참조 이미지를 업로드하여 원본 이미지를 기반으로 사실적인 테마파크 이미지를 생성합니다.",
        prompt: "Generates a photorealistic theme park image based on the original image.\nThe theme park and the people enjoying it are depicted in an extremely photorealistic style. Daytime. Sunny.\nThe color scheme and design are extracted from the original image and applied to the color scheme and design of various facilities.\nVehicles and buildings based on the original image, mascot costumes that are a distorted version of the original image, and signs with the original image printed on them are placed within the image.\nThe mascot costume design should use the original image as a motif, but be moderately distorted to create a photorealistic look.\nThe sizes of the people and mascot costumes must not be unrealistic.\nEven if the original image is anime-style, the final image must be a photorealistic theme park. Be sure to follow these rules.",
        category: "건축 및 인테리어",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 202,
        name: "슈퍼히어로 인테리어 디자인",
        description: "[슈퍼히어로]에서 영감을 받은 현대적인 거실의 초현실적이고 전문적인 인테리어 디자인 사진. 방은 깨끗한 선과 회색, 검은색, 흰색의 중성적인 색상 팔레트를 가지고 있으며 [테마 색상]으로 포인트를 주었습니다.",
        prompt: "A hyper-realistic, professional interior design photograph of a modern living room inspired by a [Superhero]. The room has clean lines, a neutral color palette of greys, blacks, and whites, with accents of [Theme Color]. A large, stylized 3D wall sculpture of the [Superhero] dominates the main wall. Subtle thematic details are placed throughout the room, such as framed art prints of blueprints, a floor lamp designed to resemble a specific motif (e.g., a shield or logo), and a side table with a few well-placed props (e.g., a stylized helmet). The furniture is contemporary and minimalist, with a large, comfortable sofa and a low coffee table. Dramatic, focused lighting highlights the main wall sculpture, while warm ambient light from windows and lamps creates an inviting atmosphere. The overall style is sophisticated and elegant, a subtle homage rather than an overt fan-tribute.",
        category: "건축 및 인테리어",
        requiresImage: false,
        taskType: 'generate'
    },
];
