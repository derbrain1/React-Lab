import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CitiesCard } from '../components/cities-card/cities-card';
import { AppRoute } from '../const';

describe('CitiesCard', () => {
  const mockProps = {
    id: 'test-id-123',
    title: 'Beautiful apartment in Paris',
    type: 'apartment',
    price: 150,
    isPremium: false,
    isFavorite: false,
    previewImage: 'https://example.com/image.jpg',
    rating: 4.5,
    cardClass: 'cities__card place-card',
  };

  const renderCard = (props = {}) => render(
    <MemoryRouter>
      <CitiesCard {...mockProps} {...props} />
    </MemoryRouter>
  );

  it('отображает заголовок объявления на карточке', () => {
    renderCard();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('отображает цену объявления', () => {
    renderCard();
    expect(screen.getByText(`€${mockProps.price}`)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });

  it('отображает метку "Premium", когда isPremium = true', () => {
    renderCard({ isPremium: true });
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('не отображает метку "Premium", когда isPremium = false', () => {
    renderCard({ isPremium: false });
    expect(screen.queryByText('Premium')).not.toBeInTheDocument();
  });

  it('ссылка на страницу объявления содержит id в href', () => {
    renderCard();
    const link = screen.getByRole('link', { name: /beautiful apartment in paris/i });
    expect(link).toHaveAttribute('href', `${AppRoute.Offer}/${mockProps.id}`);
  });
});