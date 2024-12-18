import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('Loading', () => {
  it('deve renderizar o componente de carregamento corretamente', () => {
    render(<Loading />);

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toBeInTheDocument();
  });

  it('deve ter a classe "loading" aplicada', () => {
    render(<Loading />);

    const loading = screen.getByTestId('loading-icon');
    expect(loading).toHaveClass('loading');    
  });
});
