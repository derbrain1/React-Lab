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
    previewImage: '/img/amsterdam-1.jpg',
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
        longitude: 4.939309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: '/img/amsterdam-2.jpg',
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
    previewImage: '/img/amsterdam-3.jpg',
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
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/amsterdam-4.jpg',
  },

  
  {
    id: 'f4444444-5555-6666-7777-888888888888',
    title: 'Charming Marais apartment',
    type: 'apartment',
    price: 180,
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
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: '/img/paris-1.jpg',
  },

  {
    id: 'f5555555-6666-7777-8888-999999999999',
    title: 'Eiffel Tower view studio',
    type: 'apartment',
    price: 220,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: '/img/paris-2.jpg',
  },

  {
    id: 'f6666666-7777-8888-9999-aaaaaaaaaaaa',
    title: 'Latin Quarter loft',
    type: 'room',
    price: 95,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    previewImage: '/img/paris-3.jpg',
  },

  {
    id: 'f7777777-8888-9999-aaaa-bbbbbbbbbbbb',
    title: 'Montmartre family home',
    type: 'house',
    price: 310,
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
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/paris-4.jpg',
  },

  
  {
    id: 'g8888888-9999-aaaa-bbbb-cccccccccccc',
    title: 'Cathedral district apartment',
    type: 'apartment',
    price: 140,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/cologne-1.jpg',
  },

  {
    id: 'g9999999-aaaa-bbbb-cccc-dddddddddddd',
    title: 'Rhine view studio',
    type: 'apartment',
    price: 85,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    previewImage: '/img/cologne-2.jpg',
  },

  {
    id: 'gaaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
    title: 'Belgian Quarter room',
    type: 'room',
    price: 70,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: '/img/cologne-3.jpg',
  },

  {
    id: 'gbbbbbbbb-cccc-dddd-eeee-ffffffffffff',
    title: 'Old Town family house',
    type: 'house',
    price: 280,
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
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: '/img/cologne-4.jpg',
  },

 
  {
    id: 'hcccccccc-dddd-eeee-ffff-gggggggggggg',
    title: 'Grand Place apartment',
    type: 'apartment',
    price: 165,
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
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: '/img/brussel-1.jpg',
  },

  {
    id: 'hdddddddd-eeee-ffff-gggg-hhhhhhhhhhhh',
    title: 'European Quarter studio',
    type: 'apartment',
    price: 110,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    previewImage: '/img/brussel-2.jpg',
  },

  {
    id: 'heeeeeeee-ffff-gggg-hhhh-iiiiiiiiiiii',
    title: 'Sablon district room',
    type: 'room',
    price: 80,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: '/img/brussel-3.jpg',
  },

  {
    id: 'hffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj',
    title: 'Ixelles family house',
    type: 'house',
    price: 240,
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
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/brussel-4.jpg',
  },

  
  {
    id: 'igggggggg-hhhh-iiii-jjjj-kkkkkkkkkkkk',
    title: 'Speicherstadt loft',
    type: 'apartment',
    price: 195,
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
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: '/img/hamburg-1.jpg',
  },

  {
    id: 'ihhhhhhhh-iiii-jjjj-kkkk-llllllllllll',
    title: 'Alster lake studio',
    type: 'apartment',
    price: 130,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/hamburg-2.jpg',
  },

  {
    id: 'iiiiiiiii-jjjj-kkkk-llll-mmmmmmmmmmmm',
    title: 'St. Pauli room',
    type: 'room',
    price: 75,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    previewImage: '/img/hamburg-3.jpg',
  },

  {
    id: 'ijjjjjjjj-kkkk-llll-mmmm-nnnnnnnnnnnn',
    title: 'Blankenese villa',
    type: 'house',
    price: 350,
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
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: '/img/hamburg-4.jpg',
  },

 
  {
    id: 'jkkkkkkkk-llll-mmmm-nnnn-oooooooooooo',
    title: 'Altstadt apartment',
    type: 'apartment',
    price: 155,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/dusseldorf-1.jpg',
  },

  {
    id: 'jllllllll-mmmm-nnnn-oooo-pppppppppppp',
    title: 'MedienHafen studio',
    type: 'apartment',
    price: 125,
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
    isFavorite: true,
    isPremium: true,
    rating: 4.6,
    previewImage: '/img/dusseldorf-2.jpg',
  },

  {
    id: 'jmmmmmmmm-nnnn-oooo-pppp-qqqqqqqqqqqq',
    title: 'Karlstadt room',
    type: 'room',
    price: 85,
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
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: '/img/dusseldorf-3.jpg',
  },

  
];


export default offersList;
