import { render, screen } from '@testing-library/react';
import ContentApp from '.';

describe('ContentApp', () => {
  it('deve renderizar o layout e os componentes corretamente', () => {

    render(<ContentApp />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('filtro')).toBeInTheDocument();
    expect(screen.getByText('Usuário por CPF')).toBeInTheDocument();

    const contentSearch = screen.getByTestId('content-search');
    expect(contentSearch).toBeInTheDocument();
  });
});