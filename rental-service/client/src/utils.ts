import { SortOffersType } from './const';
import type { CityOffer, OffersList } from './types/offer';
import type { SortOffer } from './types/sort';

export function getCity(name: string, cities: CityOffer[]): CityOffer | undefined {
  const lowerName = name.toLowerCase();
  return cities.find((city) => city.name.toLowerCase() === lowerName);
}

export function getOffersByCity(city: string, offers: OffersList[]): OffersList[] {
  const lowerName = city.toLowerCase();
  return offers.filter((offer) => offer.city.name.toLowerCase() === lowerName);
}

export function sortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
      
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  } 
}