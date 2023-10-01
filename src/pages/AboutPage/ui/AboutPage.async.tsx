import { lazy } from 'react';
// using lazy to get one chunk for every page
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
