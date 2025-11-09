
import type { Case } from './types';

export const imageEditingCases: Case[] = [
    {
        id: 102,
        name: "지도 화살표로 지상 뷰 생성",
        description: "빨간 화살표가 포함된 구글 지도 이미지를 업로드하여 화살표가 가리키는 방향의 실제 세계 뷰를 생성합니다.",
        prompt: "draw what the red arrow sees",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 107,
        name: "자동 사진 편집",
        description: "단조로운 사진의 대비, 색상, 조명을 향상시켜 더 풍부한 느낌의 이미지로 자동 보정합니다.",
        prompt: "This photo is very boring and plain. Enhance it! Increase the contrast, boost the colors, and improve the lighting to make it richer,You can crop and delete details that affect the composition.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 109,
        name: "교차 시점 이미지 생성",
        description: "지상에서 촬영한 사진을 탑다운 뷰로 변환하고 사진작가의 위치를 표시합니다.",
        prompt: "Convert the photo to a top-down view and mark the location of the photographer.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 113,
        name: "색상 팔레트로 라인 아트 채색",
        description: "라인 아트 이미지와 색상 팔레트 이미지를 사용하여 지정된 색상으로 정확하게 캐릭터를 채색합니다.",
        prompt: "Accurately use the color palette from Figure 2 to color the character in Figure 1",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 114,
        name: "여러 헤어스타일로 변경",
        description: "인물 사진을 3x3 격자 형식으로 다양한 헤어스타일의 아바타로 생성합니다.",
        prompt: "Generate avatars of this person with different hairstyles in a 3x3 grid format",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 116,
        name: "오래된 사진 복원 및 컬러화",
        description: "오래된 흑백 사진을 복원하고 자연스러운 색상을 추가합니다.",
        prompt: "restore and colorize this photo.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 118,
        name: "캐릭터 포즈 수정",
        description: "사진 속 인물이 정면을 보도록 포즈를 수정합니다.",
        prompt: "Have the person in the picture look straight ahead",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 122,
        name: "캐릭터 의상 변경",
        description: "인물 이미지와 의상 이미지를 업로드하여 인물의 의상을 변경합니다. 포즈, 표정, 배경은 유지됩니다.",
        prompt: "Replace the person's clothing in the input image with the target clothing shown in the reference image. Keep the person's pose, facial expression, background, and overall realism unchanged. Make the new outfit look natural, well-fitted, and consistent with lighting and shadows. Do not alter the person's identity or the environment — only change the clothes.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 125,
        name: "캐릭터 포즈 수정",
        description: "사진 속 인물이 정면을 보도록 포즈를 수정합니다.",
        prompt: "Have the person in the picture look straight ahead",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 127,
        name: "이미지에 워터마크 추가",
        description: "참고 이미지 전체에 'TRUMP'라는 단어를 반복하여 워터마크를 추가합니다.",
        prompt: "Watermark the word ‘TRUMP’ over and over again across the whole image.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 129,
        name: "빨간 펜 주석",
        description: "이미지를 분석하고 개선할 수 있는 부분을 빨간 펜으로 표시합니다.",
        prompt: "Analyze this image. Use red pen to denote where you can improve.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 136,
        name: "가상 메이크업 체험",
        description: "캐릭터 참조 이미지와 메이크업 참조 이미지를 업로드하여, 캐릭터에 해당 메이크업을 적용합니다.",
        prompt: "Apply the makeup from Image 2 to the character in Image 1, while maintaining the pose from Image 1.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 137,
        name: "메이크업 분석",
        description: "이미지를 분석하고 개선할 수 있는 부분을 빨간 펜으로 표시합니다.",
        prompt: "Analyze this image. Use a red pen to mark areas that can be improved",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 142,
        name: "오버레이 필터/재질",
        description: "참조 이미지와 필터/재질 참조 이미지를 업로드하여, 사진에 해당 효과를 오버레이합니다.",
        prompt: "Overlay the [glass] effect from Image 2 onto the photo in Image 1",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 143,
        name: "캐릭터 얼굴 모양 제어",
        description: "참조 이미지와 얼굴 모양 참조 이미지를 업로드하여, 캐릭터를 해당 얼굴 모양의 치비 버전으로 디자인합니다.",
        prompt: "Design the character from Image 1 as a chibi version according to the face shape from Image 2",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 144,
        name: "조명 제어",
        description: "참조 이미지와 조명 참조 이미지를 업로드하여, 캐릭터의 조명을 변경하고 어두운 영역을 그림자로 처리합니다.",
        prompt: "Change the character from Image 1 to the lighting from Image 2, with dark areas as shadows",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 148,
        name: "음식 칼로리 주석",
        description: "음식 참조 이미지를 업로드하여 음식 이름, 칼로리 밀도, 대략적인 칼로리를 주석으로 추가합니다.",
        prompt: "annotate this meal with names of food and calorie density and approximate calories",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 149,
        name: "피사체 추출 및 투명 레이어에 배치",
        description: "참조 이미지에서 특정 피사체를 추출하여 투명 배경에 배치합니다.",
        prompt: "extract the [samurai] and put transparent background",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 150,
        name: "이미지 아웃페인팅 복구",
        description: "투명한 체커보드 영역이 포함된 이미지를 업로드하여, 해당 부분을 복구하고 완전한 사진으로 복원합니다.",
        prompt: "Repair the checkerboard (transparent) parts of the image and restore a complete, coherent photo.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 162,
        name: "카메라 매개변수 재설정",
        description: "참조 이미지를 업로드하고 원하는 카메라 매개변수(ISO, 조리개, 셔터 속도, 초점 거리)로 이미지를 재설정합니다.",
        prompt: "RAW-ISO [100] - [F2.8-1/200 24mm] settings",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 163,
        name: "증명사진 만들기",
        description: "인물 참조 이미지를 업로드하여 머리를 자르고 파란색 배경의 2인치 증명사진을 만듭니다. 전문적인 비즈니스 복장과 정면 얼굴, 약간의 미소가 특징입니다.",
        prompt: "Crop the head and create a 2-inch ID photo with:\n  1. Blue background\n  2. Professional business attire\n  3. Frontal face\n  4. Slight smile",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 173,
        name: "버거 재료 제거",
        description: "버거 이미지에서 모든 재료를 제거하고 위아래 번만 남깁니다. 속이 채워져 있을 때와 같은 간격을 유지합니다.",
        prompt: "Remove all the ingredients from the burger and keep only the top and bottom buns. Leave a gap between them, keeping the same spacing as if the fillings were still inside.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 174,
        name: "고해상도 이미지 복원",
        description: "참조 이미지를 업로드하여 오래된 이미지의 해상도를 높이고 적절한 질감 디테일을 추가하여 현대적인 애니메이션 기술로 재해석합니다.",
        prompt: "Enhance the resolution of this old image and add the appropriate texture details, reinterpreting it with modern anime techniques.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 178,
        name: "부분적으로 먹은 음식 복원",
        description: "참조 이미지를 업로드하여 반쯤 먹은 음식을 원래의 먹지 않은 상태로 복원합니다.",
        prompt: "Restore this half-eaten [XX] back to its original uneaten state.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 197,
        name: "이미지를 휴대폰 배경화면으로 만들기",
        description: "참조 이미지를 업로드하여 아이폰 잠금 화면 배경화면 효과로 변환합니다. 휴대폰의 시간, 날짜, 상태 표시줄 세부 정보가 이미지 위에 오버레이됩니다.",
        prompt: "Transform the image into an iPhone lock screen wallpaper effect. The phone’s time (01:16), date (Sunday, September 16), and status bar details (battery, signal, etc.) appear overlaid on the image, with flashlight and camera icons at the bottom. The original picture is adapted to fit the elongated smartphone screen composition. The phone is placed against a background in the same color scheme.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 200,
        name: "참조 이미지 객체 투명하게 만들기",
        description: "참조 이미지를 업로드하여 이 객체를 투명하게 만듭니다.",
        prompt: "Make this object transparent.",
        category: "이미지 편집",
        requiresImage: true,
        taskType: 'edit'
    },
];
