import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  it('should render the header with the logo', () => {
    render(<Header />);

    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();

    expect(logo).toHaveAttribute('src', expect.stringContaining('mocked-image-url'));
  });

  it('should apply the correct CSS class to the header', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });
});
