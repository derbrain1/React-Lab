import type { FullOffer } from './offer.ts';

const offers: FullOffer[] = [
  {
    id: 'b080b0ee-3752-4d46-9d08-cb6b4530e2eb',
    title: 'Wood and stone place',
    type: 'apartment',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families.',
    price: 370,
    images: [
      '/img/paris-apartment-01.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85661,
      longitude: 2.342499,
      zoom: 16,
    },
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
  },

  {
    id: 'c1111111-2222-3333-4444-555555555555',
    title: 'Canal view studio',
    type: 'apartment',
    description: 'Cozy studio with a view of the main canal, perfect for a weekend city break.',
    price: 120,
    images: [
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.37554,
      longitude: 4.889976,
      zoom: 16,
    },
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Heating',
      'Towels',
      'Coffee machine',
    ],
    host: {
      isPro: false,
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2,
  },

  {
    id: 'd2222222-3333-4444-5555-666666666666',
    title: 'Old town loft',
    type: 'room',
    description: 'Stylish loft in the heart of the historic center with quick access to main attractions.',
    price: 90,
    images: [
      '/img/cologne-apartment-01.jpg',
      
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.937361,
      longitude: 6.967974,
      zoom: 16,
    },
    goods: [
      'Heating',
      'Wi-Fi',
      'Washer',
      'Towels',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.3,
    bedrooms: 1,
    maxAdults: 2,
  },

  {
    id: 'e3333333-4444-5555-6666-777777777777',
    title: 'Riverside family house',
    type: 'house',
    description: 'Spacious house near the river with private garden and parking, suited for family vacations.',
    price: 260,
    images: [
      '/img/brussel-apartment-01.jpg',
    ],
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.848557,
      longitude: 4.345697,
      zoom: 16,
    },
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washer',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Parking',
    ],
    host: {
      isPro: false,
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 5,
  },
];

export default offers;
