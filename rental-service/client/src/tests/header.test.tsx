import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Header } from '../components/header/header';
import { renderWithProviders } from './render-with-providers';
import { AuthorizationStatus } from '../const';
import { makeFakeOffer } from './mocks';

const fakeUserInfo = {
  id: 'user-1',
  email: 'test@example.com',
  username: 'Test User',
  avatar: '/static/avatar.jpg',
  isPro: false,
  token: 'fake-token',
};

const fakeFavoriteOffers = [
  { ...makeFakeOffer(), isFavorite: true },
  { ...makeFakeOffer(), isFavorite: true },
  { ...makeFakeOffer(), isFavorite: false },
];

describe('Header — неавторизованный пользователь', () => {
  it('отображает ссылку Sign in', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      },
    });
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  it('не отображает Sign out', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      },
    });
    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument();
  });

  it('не отображает email пользователя', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      },
    });
    expect(screen.queryByText(fakeUserInfo.email)).not.toBeInTheDocument();
  });

  it('не отображает количество избранного', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
        offers: fakeFavoriteOffers,
      },
    });
    
    const favoriteCount = screen.queryByText('2');
    expect(favoriteCount).not.toBeInTheDocument();
  });

  it('не отображает аватар пользователя', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      },
    });
    
    const avatar = screen.queryByAltText(/user avatar/i);
    expect(avatar).not.toBeInTheDocument();
  });

  it('ссылка Sign in ведет на страницу логина', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
      },
    });
    
    const signInLink = screen.getByRole('link', { name: /sign in/i });
    expect(signInLink).toHaveAttribute('href', '/login');
  });
});

describe('Header — неизвестный статус (Unknown)', () => {
  it('отображает ссылку Sign in', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Unknown,
        user: null,
      },
    });
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  it('не отображает Sign out', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Unknown,
        user: null,
      },
    });
    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument();
  });

  it('не отображает email пользователя', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Unknown,
        user: null,
      },
    });
    expect(screen.queryByText(fakeUserInfo.email)).not.toBeInTheDocument();
  });
});

describe('Header — авторизованный пользователь', () => {
  it('отображает email пользователя', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
      },
    });
    expect(screen.getByText(fakeUserInfo.email)).toBeInTheDocument();
  });

  it('отображает количество избранных предложений', () => {
    const favoriteCount = fakeFavoriteOffers.filter(offer => offer.isFavorite).length;
    
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
        offers: fakeFavoriteOffers,
      },
    });
    
    expect(screen.getByText(favoriteCount.toString())).toBeInTheDocument();
  });

  it('отображает кнопку Sign out', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
      },
    });
    
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });

  it('не отображает ссылку Sign in', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
      },
    });
    
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
  });

  it('отображает аватар пользователя, если он есть', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
      },
    });
    
    const avatar = screen.getByAltText(/user avatar/i);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', `http://localhost:5000${fakeUserInfo.avatar}`);
  });

  it('корректно отображает количество избранного (0)', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
        offers: [],
      },
    });
    
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  
  it('ссылка на избранное ведет на страницу /favorites', () => {
    renderWithProviders(<Header />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: fakeUserInfo,
      },
    });
    
    const favoritesLink = screen.getByRole('link', { name: new RegExp(fakeUserInfo.email, 'i') });
    expect(favoritesLink).toHaveAttribute('href', '/favorites');
  });
});