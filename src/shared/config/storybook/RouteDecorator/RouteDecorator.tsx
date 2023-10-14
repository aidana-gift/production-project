import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const RouteDecorator = (StoryComponent: Story) => (
    <Suspense fallback="Loading...">
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    </Suspense>
);
