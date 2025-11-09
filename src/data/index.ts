

import { styleTransferCases } from './style-transfer';
import { imageEditingCases } from './image-editing';
import { objectCreationCases } from './object-creation';
import { textAndUiCases } from './text-and-ui';
import { conceptArtCases } from './concept-art';
import { productAndBrandingCases } from './product-and-branding';
import { architectureAndInteriorCases } from './architecture-and-interior';
import { funAndCreativeCases } from './fun-and-creative';
import type { Case } from './types';

// The order of categories here determines the display order in the UI.
export const categories: Case['category'][] = [
    '스타일 변환',
    '이미지 편집',
    '객체 생성 및 통합',
    '텍스트 및 UI 생성',
    '컨셉 아트 및 일러스트',
    '제품 및 브랜딩',
    '건축 및 인테리어',
    '재미 & 창의'
];

const allCases: Case[] = [
    ...styleTransferCases,
    ...imageEditingCases,
    ...objectCreationCases,
    ...textAndUiCases,
    ...conceptArtCases,
    ...productAndBrandingCases,
    ...architectureAndInteriorCases,
    ...funAndCreativeCases
];

const casesGroupedByCategory: Case[] = [];
categories.forEach(category => {
    const casesForCategory = allCases
        .filter(c => c.category === category)
        .sort((a, b) => a.id - b.id); // Sort by original ID to maintain a stable order within the category
    
    casesGroupedByCategory.push(...casesForCategory);
});

// Re-number all cases to have a unique, sequential ID. This is important for React keys and selection logic.
// The displayed number will be handled in the UI component to restart from 1 for each category.
export const cases: Case[] = casesGroupedByCategory.map((caseItem, index) => ({
    ...caseItem,
    id: index + 1,
}));
