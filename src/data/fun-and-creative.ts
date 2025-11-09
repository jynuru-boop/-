
import type { Case } from './types';

export const funAndCreativeCases: Case[] = [
    {
        id: 9,
        name: "풍자 만화 생성",
        description: "'MAKE AMERICA GREAT AGAIN' 모자가 'MADE IN CHINA' 태그와 함께 있는 풍자적인 빈티지 미국 만화 스타일의 일러스트레이션을 생성합니다.",
        prompt: "An illustration in satirical comic style, rendered in a vintage American comic aesthetic. The background features a multi-tiered shelf stocked entirely with identical red baseball caps. The caps have a bold slogan on the front: “MAKE AMERICA GREAT AGAIN,” while a white side tag on each reads “MADE IN CHINA.” The composition uses a close-up perspective focusing on one specific red cap.",
        category: "재미 & 창의",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 10,
        name: "PS2 게임 커버 (GTA x 슈렉)",
        description: "슈렉 세계관을 배경으로 한 'Grand Theft Auto: Far Far Away'의 PS2 비디오 게임 케이스를 만듭니다.",
        prompt: "Can you create a PS2 video game case of \"Grand Theft Auto: Far Far Away\" a GTA based in the Shrek Universe.",
        category: "재미 & 창의",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 14,
        name: "풍자 포스터 생성",
        description: "GPT-4o가 이미지 AI 작업을 대체할 것이라는 내용의 풍자 포스터를 생성합니다.",
        prompt: "Satirical Poster Text (English):\nGPT-4o is taking over.\nForget working in image AI\nmaybe it’s time to deliver takeout instead.",
        category: "재미 & 창의",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 115,
        name: "재료 기반 요리",
        description: "다양한 식재료가 담긴 사진을 업로드하여 맛있는 점심 식사를 만들어 접시에 담아냅니다.",
        prompt: "make me a delicious lunch with these ingredients, and put it on a plate , zoomed in view of the plate, remove the other plates and ingredients.",
        category: "재미 & 창의",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 130,
        name: "폭발적인 음식",
        description: "이 제품을 신선하고 날것의 주요 재료들이 제품 주위로 폭발적으로 흩날리는 역동적인 현대적 장면에서 촬영합니다.",
        prompt: "Photograph this product in a dramatic modern scene accompanied by explosive outward dynamic arrangement of the key ingredients fresh and raw flying around the product signifying its freshness and nutritional value. promo ad shot, without text, product is emphasized, with the key brand colors as background.",
        category: "재미 & 창의",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 138,
        name: "중세 시대의 구글 지도 뷰",
        description: "[호비튼 거리]의 대시캠 구글 스트리트 뷰 샷 | [정원 가꾸기, 파이프 담배 피우기와 같은 일상적인 작업을 수행하는 호빗들] | [화창한 날씨]",
        prompt: "Dashcam Google Street View shot | [Hobbiton Street] | [hobbits carrying out daily tasks like gardening and smoking pipes] | [Sunny weather]",
        category: "재미 & 창의",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 190,
        name: "Vtuber 되기",
        description: "참조 이미지를 업로드하여 원본 이미지를 사용하여 가상의 Vtuber와 그들의 스트리밍 화면을 만듭니다.",
        prompt: "Create a fictional Vtuber and their streaming screen using the original image.\nThe Vtuber's hairstyle and clothing will be faithfully reproduced from the original image.\nThe Vtuber image will be 2.5D-like, so it is not necessary to perfectly reproduce the style of the original image. A moderate sense of three-dimensionality is also necessary.\nThe Vtuber's facial expression and pose may be changed from the original image. Have the Vtuber hold a game controller.\nPlace only the Vtuber's upper body in the bottom right of the screen. Place the streaming screen of the game being played in the center of the screen. Place the chat screen on the left side of the screen.\nThe screen ratio is set to a larger size for the game screen, and the upper half of the Vtuber's body is displayed smaller.\nThe background of the original image is completely ignored, as well as the original image pose.\nAdd a fictional streaming platform and browser UI to the top and bottom of the screen.\nThe aspect ratio of the generated image is independent of that of the original image.",
        category: "재미 & 창의",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 193,
        name: "만화 폭발 효과로 객체 슬라이스",
        description: "[OBJECT]를 중간에서 깨끗하게 반으로 자릅니다. 위쪽과 아래쪽 절반이 약간 분리되어 떠 있습니다.",
        prompt: "cut cleanly THE [OBJECT] in half across the middle, the top and bottom halves slightly separated and floating apart.  \nBetween the halves, instead of the natural inside, there is a stylized cartoon nuclear explosion effect: a central vertical column of glowing yellow-orange bubble smoke, with a wide horizontal shockwave ring of round bubbly clouds spreading to the sides, fiery glowing highlights above and below the shockwave, creating the impression of intense heat and energy\nThe outside of the [OBJECT] remains photorealistic with detailed texture and lighting, while the inner effect is highly graphic and playful, giving a striking contrast between realism and cartoon. Studio lighting, centered composition",
        category: "재미 & 창의",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 209,
        name: "어린 시절 자신을 위한 치료",
        description: "참조 초상화를 업로드하여 사실적인 미니멀리스트 치료실을 만듭니다. 밝은 벽, 회색 소파, 티슈 상자가 있는 나무 커피 테이블, 노트북, 물 한 잔, 단순한 프레임과 플로어 램프, 부드러운 자연광이 있습니다.",
        prompt: "Photorealistic minimalist therapy room; light walls, grey sofa, wooden coffee table with a tissue box, notebook and a glass of water, simple frame and floor lamp, soft natural daylight. The same person at two ages sits side-by-side: adult on the left speaking with open hands; child on the right listening with head slightly down. Both wear matching [OUTFIT] (same color & style). Clean studio vibe, centered composition, shallow depth of field, 50mm look, 4K, vertical 3:4. No extra people, no text, no watermark.",
        category: "재미 & 창의",
        requiresImage: true,
        taskType: 'edit'
    },
];
