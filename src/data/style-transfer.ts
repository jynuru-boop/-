
import type { Case } from './types';

export const styleTransferCases: Case[] = [
    {
        id: 3,
        name: "3D 치비 중국 결혼식 장면",
        description: "사진 속 두 사람을 전통 중국 결혼식 복장을 한 3D 치비 스타일 만화 캐릭터로 변환합니다.",
        prompt: "Transform the two people in the photo into chibi-style 3D cartoon characters, dressed in traditional Chinese wedding attire. The overall theme is a festive red Chinese-style wedding. The background features a decorative “囍” (double happiness) paper-cut pattern in a classic folk style.",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 4,
        name: "지브리 스타일 변환",
        description: "사진을 지브리 스튜디오 애니메이션 스타일로 다시 그립니다.",
        prompt: "Redraw this photo in Ghibli style",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 12,
        name: "사진을 3D Q-버전 스타일로",
        description: "장면 속 인물들을 3D 치비 스타일 피규어로 변환하되, 원래 장면 레이아웃과 의상은 그대로 유지합니다.",
        prompt: "Transform the characters in the scene into 3D chibi-style figures, while keeping the original scene layout and their clothing exactly the same.",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 17,
        name: "픽사 3D 스타일",
        description: "사진을 픽사 3D 스타일로 다시 그립니다.",
        prompt: "Redraw this photo in Pixar 3D style",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 105,
        name: "다른 시대의 내 사진",
        description: "인물 사진을 특정 시대(예: 1970년대)의 클래식한 스타일로 변경합니다. 헤어스타일, 배경 등을 수정할 수 있습니다.",
        prompt: "Change the characer's style to [1970]'s classical [male] style. Add [long curly] hair, [long mustache], change the background to the iconic [californian summer landscape]. Don't change the character's face",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 111,
        name: "애니메이션을 실제 코스어로",
        description: "일러스트 이미지를 코스프레하는 소녀의 사진으로 생성하며, 배경은 코미케(코믹마켓)로 설정합니다.",
        prompt: "Generate a photo of a girl cosplaying this illustration, with the background set at Comiket",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 157,
        name: "만화 스타일 변환",
        description: "입력 사진을 흑백 만화 스타일의 선화로 변환합니다.",
        prompt: "Convert the input photo into a black-and-white manga-style line drawing.",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
    {
        id: 166,
        name: "분할 대비 스타일 사진",
        description: "침실 사진을 반으로 나누어 왼쪽은 2018년, 오른쪽은 1964년 스타일로 만듭니다.",
        prompt: "A photo of a bedroom split down the middle: the left side is 2018 and the right side is 1964, in the same room.",
        category: "스타일 변환",
        requiresImage: false,
        taskType: 'generate'
    },
    {
        id: 210,
        name: "픽사 스타일 초상화",
        description: "첨부된 이미지의 청년을 픽사 스타일의 3D 아바타로 만듭니다. 행복하게 웃고 있으며, 깨끗한 흰색 배경에 부드러운 조명과 생생한 색상이 특징입니다.",
        prompt: "3D avatar of the young man in the image attached, smiling happily, clean white background, conceptual digital art in Pixar-style, high quality, soft lighting, smooth textures, vibrant colors, realistic proportions with a cartoon touch & studio render look.",
        category: "스타일 변환",
        requiresImage: true,
        taskType: 'edit'
    },
];
