
import type { Case } from './types';

export const textAndUiCases: Case[] = [
    {
        id: 16,
        name: "레트로 CRT 컴퓨터 부팅 화면",
        description: "[모양 또는 로고]의 ASCII 아트로 해석되는 레트로 CRT 컴퓨터 부팅 화면을 생성합니다.",
        prompt: "Retro CRT computer boot screen that resolves into ASCII-art of [shape or logo]",
        category: "텍스트 및 UI 생성",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 103,
        name: "실세계 AR 정보",
        description: "참고 이미지에서 관심 지점을 강조하고 관련 정보를 주석으로 추가하여 위치 기반 AR 경험을 생성합니다.",
        prompt: "you are a location-based AR experience generator. highlight [point of interest] in this image and annotate relevant information about it.",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 119,
        name: "수학 문제 추론",
        description: "수학 문제를 업로드하여 문제에 따라 해당 위치에 답을 작성합니다.",
        prompt: "Write the answer to the problem in the corresponding position based on the question",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 128,
        name: "지식 추론 이미지 생성",
        description: "세계에서 가장 높은 건물 5개의 인포그래픽을 만듭니다.",
        prompt: "Make me an infographic of 5 tallest buildings in the world",
        category: "텍스트 및 UI 생성",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 139,
        name: "타이포그래피 일러스트 생성",
        description: "'자전거 타기'라는 문구의 글자만을 사용하여 자전거를 타는 장면의 미니멀리스트 흑백 타이포그래피 일러스트를 만듭니다.",
        prompt: "Create a minimalist black-and-white typographic illustration of the scene riding a bicycle using only the letters in the phrase ['riding a bicycle'] . Each letter should be creatively shaped or positioned to form the rider, the bicycle, and a sense of motion. The design should be clean, ultra-minimalist, and entirely composed of the modified ['riding a bicycle'] letters without adding any extra shapes or lines. The letters should flow or curve to mimic the natural form of the scene, while still remaining legible.",
        category: "텍스트 및 UI 생성",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 179,
        name: "격투 게임 인터페이스 생성",
        description: "참조 이미지를 업로드하여 두 피사체가 모두 초점에 맞춰진 중간 동작 액션 장면을 만듭니다. 3/4 각도로 무술 격투 자세를 취하고 있습니다.",
        prompt: "Create a mid motion actionscene where both subject are in focuswith aThree-Quarter Angle in martial artsfighting stances. They are in the samecinematic scene. Remove the line downthe centre with a blurred crumbling ruins ina purple alien world in the background. Thescene is shot at sunrise. Modern Fightinggame health bars MORDON V'S DEATHSEED. power move. Hud style screeneffects.Add a thumbnail of each characterto the health bars. ense flares!",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 199,
        name: "X 계정을 플로피 디스크로 만들기",
        description: "X 계정의 참조 이미지를 업로드하여 90년대 플로피 디스크로 만듭니다.",
        prompt: "Make my X account into a floppy disk in the 90s",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 204,
        name: "타이포그래피 로고 디자인",
        description: "{OBJECT} 모양의 타이포그래피 일러스트를 만듭니다. 텍스트 자체가 모양을 형성하며, 굵고 장난기 있는 글자 스타일이 전체 실루엣을 채웁니다.",
        prompt: "Create a typographic illustration shaped like a {OBJECT}, where the text itself forms the shape — bold and playful lettering style that fills the entire silhouette — letters adapt fluidly to the curves and contours of the object — vibrant and contrasting color palette that fits the theme — background is solid and enhances the focus on the main shape — vector-style, clean, high resolution, poster format, 1:1 aspect ratio.",
        category: "텍스트 및 UI 생성",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 205,
        name: "RPG 캐릭터 상태 UI",
        description: "참조 이미지를 업로드하여 원본 이미지의 캐릭터를 사용하여 RPG 게임의 캐릭터 상태 화면을 만듭니다.",
        prompt: "Use the character in the original image to create a character status screen for an RPG game.\nKeep the character design and style from the original image, but change the costume to one from a fantasy RPG. Also, change the pose to suit the situation.\nDisplay the character from the original image and the status screen side by side.\nThe status screen will list various parameters, skills, icons, etc.\nThe background should be a fantasy background that matches the style of the original image.\nThe status screen should be rich and stylish, like a game from 2025.",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 206,
        name: "텍스트 다이어그램을 픽토그램으로 변환",
        description: "텍스트가 포함된 참조 이미지를 업로드하여 이 설명 다이어그램을 픽토그램으로 변환합니다.",
        prompt: "Convert this explanatory diagram into pictograms.",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 208,
        name: "LINE 스탬프 이미지 만들기",
        description: "표정 참조 이미지와 캐릭터 참조 이미지를 업로드하여 기쁨, 분노, 슬픔, 행복의 표정을 담은 캐릭터 시트를 만듭니다.",
        prompt: "Character sheet, facial expressions, joy, anger, sadness, happiness",
        category: "텍스트 및 UI 생성",
        requiresImage: true,
        taskType: 'edit'
    },
];
