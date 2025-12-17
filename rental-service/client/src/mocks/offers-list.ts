import type { OffersList } from '../types/offer';

export const offersList: OffersList[] = [
  {
    id: 'b080b0ee-3752-4d46-9d08-cb6b4530e2eb',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: '/img/paris-1.jpg',
  },

  {
    id: 'c1111111-2222-3333-4444-555555555555',
    title: 'Canal view studio',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude:  4.939309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude:  4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: '/img/amsterdam.jpg',
  },

  {
    id: 'd2222222-3333-4444-5555-666666666666',
    title: 'Old town loft',
    type: 'room',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: '/img/cologne-1.jpg',
  },

  {
    id: 'e3333333-4444-5555-6666-777777777777',
    title: 'Riverside family house',
    type: 'house',
    price: 260,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude:  4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude:  4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/brussel-1.jpg',
  },
];

export default offersList;
