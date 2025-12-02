import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Example component test
describe('Component Tests', () => {
  it('should render correctly', () => {
    render(
      <div>Hello Metalabs</div>
    );

    expect(screen.getByText('Hello Metalabs')).toBeDefined();
  });
});
