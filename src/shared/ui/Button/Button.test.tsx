import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test clean theme', () => {
        render(<Button theme={ButtonTheme.CLEAN}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clean');
        // screen.debug();
    });
});
