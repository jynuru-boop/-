
export interface Case {
  id: number;
  name: string;
  description: string;
  prompt: string;
  category: '스타일 변환' | '이미지 편집' | '객체 생성 및 통합' | '텍스트 및 UI 생성' | '컨셉 아트 및 일러스트' | '제품 및 브랜딩' | '건축 및 인테리어' | '재미 & 창의';
  requiresImage: boolean;
  taskType: 'edit' | 'generate';
}
