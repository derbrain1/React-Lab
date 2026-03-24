import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LoadingPage } from '../pages/main-page/loading-page/loading-page';
import { NotFoundPage } from '../pages/main-page/not-found-page/not-found-page';
import { AppRoute } from '../const';

describe('LoadingPage', () => {
  it('отображает текст загрузки', () => {
    render(<LoadingPage />);
    
    
    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeInTheDocument();
  });

});

describe('PageNotFound', () => {
  const renderPage = () => render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  it('отображает заголовок PAGE NOT FOUND', () => {
    renderPage();
    
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch(/PAGE NOT FOUND/i);
});

  it('ссылка на главную страницу присутствует', () => {
    renderPage();
    
    
    const link = screen.getByRole('link', { name: /главную/i });
    expect(link).toBeInTheDocument();
    
    
    expect(screen.getByText(/перейдите на главную страницу/i)).toBeInTheDocument();
  });

  it('ссылка ведет на "/"', () => {
    renderPage();
    
    const link = screen.getByRole('link', { name: /главную/i });
    
    
    expect(link).toHaveAttribute('href', AppRoute.Main);
    
  });

});