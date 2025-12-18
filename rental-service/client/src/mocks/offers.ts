import type { FullOffer } from '../types/offer.ts';

const offers: FullOffer[] = [
{
 id: 'b080b0ee-3752-4d46-9d08-cb6b4530e2eb',
    title: 'Wood and stone place',
    type: 'apartment',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families.',
    price: 370,
    images: [
      '/img/apartment-01.jpg',
    ],
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
      '/img/apartment-02.jpg',
    ],
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
      '/img/room-1.jpg',
     
    ],
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
      '/img/house-1.jpg',
    ],
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
{
  id: 'f4444444-5555-6666-7777-888888888888',
  title: 'Charming Marais apartment',
  type: 'apartment',
  description: 'Beautiful apartment in the heart of Le Marais with authentic Parisian charm and modern amenities.',
  price: 180,
  images: [
    '/img/apartment-03.jpg',
    
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.8584,
    longitude: 2.3488,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Coffee machine',
    'Dishwasher',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 4.6,
  bedrooms: 2,
  maxAdults: 4,
},

{
  id: 'f5555555-6666-7777-8888-999999999999',
  title: 'Eiffel Tower view studio',
  type: 'apartment',
  description: 'Cozy studio with stunning views of the Eiffel Tower, perfect for romantic getaways.',
  price: 220,
  images: [
    '/img/apartment-04.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.8484,
    longitude: 2.3388,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Kitchen',
    'Towels',
    'Air conditioning',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: true,
  rating: 4.9,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'f6666666-7777-8888-9999-aaaaaaaaaaaa',
  title: 'Latin Quarter loft',
  type: 'room',
  description: 'Artistic loft in the vibrant Latin Quarter, close to Sorbonne and Panthéon.',
  price: 95,
  images: [
    '/img/room-2.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.8484,
    longitude: 2.3538,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Towels',
    'Coffee machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 4.4,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'f7777777-8888-9999-aaaa-bbbbbbbbbbbb',
  title: 'Montmartre family home',
  type: 'house',
  description: 'Spacious house near Sacré-Cœur with terrace and panoramic city views.',
  price: 310,
  images: [
    '/img/house-2.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.8634,
    longitude: 2.3438,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
    'Baby seat',
    'Breakfast',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 4.8,
  bedrooms: 3,
  maxAdults: 6,
},


{
  id: 'g8888888-9999-aaaa-bbbb-cccccccccccc',
  title: 'Cathedral district apartment',
  type: 'apartment',
  description: 'Modern apartment steps away from Cologne Cathedral with excellent city connections.',
  price: 140,
  images: [
    '/img/apartment-05.jpg',
  ],
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.9425,
    longitude: 6.9603,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Air conditioning',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 4.5,
  bedrooms: 2,
  maxAdults: 3,
},

{
  id: 'g9999999-aaaa-bbbb-cccc-dddddddddddd',
  title: 'Rhine view studio',
  type: 'apartment',
  description: 'Compact studio overlooking the Rhine river, ideal for solo travelers and couples.',
  price: 85,
  images: [
    '/img/apartment-06.jpg',
  ],
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.9325,
    longitude: 6.9653,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Kitchen',
    'Towels',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: true,
  rating: 4.3,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'gaaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
  title: 'Belgian Quarter room',
  type: 'room',
  description: 'Trendy room in the hip Belgian Quarter with cafes, bars and galleries nearby.',
  price: 70,
  images: [
    '/img/room-3.jpg',
  ],
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.9375,
    longitude: 6.9503,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Towels',
    'Coffee machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 4.2,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'gbbbbbbbb-cccc-dddd-eeee-ffffffffffff',
  title: 'Old Town family house',
  type: 'house',
  description: 'Historic house in Cologne Old Town with traditional German architecture and modern comfort.',
  price: 280,
  images: [
    '/img/house-3.jpg',
  ],
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.9325,
    longitude: 6.9553,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
    'Baby seat',
    'Parking',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 4.7,
  bedrooms: 3,
  maxAdults: 5,
},


{
  id: 'hcccccccc-dddd-eeee-ffff-gggggggggggg',
  title: 'Grand Place apartment',
  type: 'apartment',
  description: 'Elegant apartment near the iconic Grand Place with easy access to major attractions.',
  price: 165,
  images: [
    '/img/apartment-07.jpg',
  ],
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.8555,
    longitude: 4.3488,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
    'Coffee machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 4.7,
  bedrooms: 2,
  maxAdults: 4,
},

{
  id: 'hdddddddd-eeee-ffff-gggg-hhhhhhhhhhhh',
  title: 'European Quarter studio',
  type: 'apartment',
  description: 'Modern studio in the European Quarter, perfect for business travelers.',
  price: 110,
  images: [
    '/img/apartment-08.jpg',
  ],
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.8455,
    longitude: 4.3588,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Towels',
    'Laptop friendly workspace',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 4.4,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'heeeeeeee-ffff-gggg-hhhh-iiiiiiiiiiii',
  title: 'Sablon district room',
  type: 'room',
  description: 'Cozy room in the upscale Sablon area, surrounded by antique shops and chocolatiers.',
  price: 80,
  images: [
    '/img/room-4.jpg',
  ],
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.8455,
    longitude: 4.3438,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Towels',
    'Coffee machine',
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
  id: 'hffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj',
  title: 'Ixelles family house',
  type: 'house',
  description: 'Spacious townhouse in multicultural Ixelles with garden and parking.',
  price: 240,
  images: [
    '/img/house-4.jpg',
  ],
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 13,
    },
  },
  location: {
    latitude: 50.8405,
    longitude: 4.3538,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
    'Baby seat',
    'Parking',
    'Breakfast',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 4.8,
  bedrooms: 3,
  maxAdults: 5,
},


{
  id: 'igggggggg-hhhh-iiii-jjjj-kkkkkkkkkkkk',
  title: 'Speicherstadt loft',
  type: 'apartment',
  description: 'Converted warehouse loft in historic Speicherstadt with harbor views.',
  price: 195,
  images: [
    '/img/apartment-09.jpg',
  ],
  city: {
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 13,
    },
  },
  location: {
    latitude: 53.5803,
    longitude: 10.0153,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
    'Air conditioning',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 4.6,
  bedrooms: 2,
  maxAdults: 4,
},

{
  id: 'ihhhhhhhh-iiii-jjjj-kkkk-llllllllllll',
  title: 'Alster lake studio',
  type: 'apartment',
  description: 'Bright studio with views of the Alster lake, perfect for nature lovers.',
  price: 130,
  images: [
    '/img/apartment-10.jpg',
  ],
  city: {
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 13,
    },
  },
  location: {
    latitude: 53.5703,
    longitude: 10.0203,
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
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: true,
  rating: 4.5,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'iiiiiiiii-jjjj-kkkk-llll-mmmmmmmmmmmm',
  title: 'St. Pauli room',
  type: 'room',
  description: 'Vibrant room in the lively St. Pauli district, close to Reeperbahn nightlife.',
  price: 75,
  images: [
    '/img/room-5.jpg',
  ],
  city: {
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 13,
    },
  },
  location: {
    latitude: 53.5703,
    longitude: 10.0053,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Towels',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 4.1,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'ijjjjjjjj-kkkk-llll-mmmm-nnnnnnnnnnnn',
  title: 'Blankenese villa',
  type: 'house',
  description: 'Luxurious villa in upscale Blankenese with Elbe river views and private garden.',
  price: 350,
  images: [
    '/img/house-5.jpg',
  ],
  city: {
    name: 'Hamburg',
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 13,
    },
  },
  location: {
    latitude: 53.5853,
    longitude: 10.0103,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
    'Baby seat',
    'Air conditioning',
    'Parking',
    'Breakfast',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 4.9,
  bedrooms: 4,
  maxAdults: 6,
},


{
  id: 'jkkkkkkkk-llll-mmmm-nnnn-oooooooooooo',
  title: 'Altstadt apartment',
  type: 'apartment',
  description: 'Central apartment in the Old Town, walking distance to the Rhine promenade.',
  price: 155,
  images: [
    '/img/apartment-11.jpg',
  ],
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 13,
    },
  },
  location: {
    latitude: 51.2327,
    longitude: 6.7735,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Washer',
    'Towels',
    'Dishwasher',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: false,
  isFavorite: false,
  rating: 4.5,
  bedrooms: 2,
  maxAdults: 3,
},

{
  id: 'jllllllll-mmmm-nnnn-oooo-pppppppppppp',
  title: 'MedienHafen studio',
  type: 'apartment',
  description: 'Ultra-modern studio in the trendy Media Harbor with contemporary architecture.',
  price: 125,
  images: [
    '/img/apartment-12.jpg',
  ],
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 13,
    },
  },
  location: {
    latitude: 51.2227,
    longitude: 6.7685,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Kitchen',
    'Heating',
    'Towels',
    'Air conditioning',
    'Laptop friendly workspace',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: '/img/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: true,
  rating: 4.6,
  bedrooms: 1,
  maxAdults: 2,
},

{
  id: 'jmmmmmmmm-nnnn-oooo-pppp-qqqqqqqqqqqq',
  title: 'Karlstadt room',
  type: 'room',
  description: 'Comfortable room in the shopping district, close to Königsallee luxury avenue.',
  price: 85,
  images: [
    '/img/room-6.jpg',
  ],
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 13,
    },
  },
  location: {
    latitude: 51.2277,
    longitude: 6.7785,
    zoom: 16,
  },
  goods: [
    'Wi-Fi',
    'Heating',
    'Towels',
    'Coffee machine',
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

];

export default offers;
