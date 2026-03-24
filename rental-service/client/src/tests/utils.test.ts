import { describe, it, expect } from 'vitest';
import { getCity, getOffersByCity, sortOffersByType } from '../utils';
import { makeFakeOffer } from './mocks';
import { SortOffersType, CITIES_LOCATION } from '../const';


describe('getOffersByCity', () => {
  it('возвращает только объявления указанного города', () => {
    const paris = CITIES_LOCATION[0];
    const cologne = CITIES_LOCATION[1];
    const parisOffer = { ...makeFakeOffer(), city: paris };
    const cologneOffer = { ...makeFakeOffer(), city: cologne };


    const result = getOffersByCity('Paris', [parisOffer, cologneOffer]);


    expect(result).toHaveLength(1);
    expect(result[0].city.name).toBe('Paris');
  });


  it('возвращает пустой массив, если город не найден', () => {
    const offers = [makeFakeOffer(), makeFakeOffer()];
    expect(getOffersByCity('Tokyo', offers)).toHaveLength(0);
  });


  it('возвращает пустой массив при пустом списке предложений', () => {
    expect(getOffersByCity('Paris', [])).toEqual([]);
  });

  

});
describe('sortOffersByType', () => {
  it('сортирует от дешёвых к дорогим (PriceToHigh)', () => {
    const offers = [
      { ...makeFakeOffer(), price: 300 },
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];


    const result = sortOffersByType([...offers], SortOffersType.PriceToHigh);


    expect(result[0].price).toBe(100);
    expect(result[2].price).toBe(300);
  });


  it('сортирует от дорогих к дешёвым (PriceToLow)', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 300 },
    ];


    const result = sortOffersByType([...offers], SortOffersType.PriceToLow);


    expect(result[0].price).toBe(300);
  });


  it('сортирует по рейтингу (TopRated)', () => {
    const offers = [
      { ...makeFakeOffer(), rating: 3 },
      { ...makeFakeOffer(), rating: 5 },
      { ...makeFakeOffer(), rating: 4 },
    ];


    const result = sortOffersByType([...offers], SortOffersType.TopRated);


    expect(result[0].rating).toBe(5);
  });


  it('не изменяет исходный массив', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];


    const copy = [...offers];


    sortOffersByType(offers, SortOffersType.PriceToHigh);


    expect(offers).toEqual(copy);
  });

  it('корректно работает при пустом массиве предложений (PriceToHigh)', () => {
    const result = sortOffersByType([], SortOffersType.PriceToHigh);

    expect(result).toEqual([]);
  });
});

describe('getCity', () => {
  it('возвращает город по точному названию', () => {
    const cities = CITIES_LOCATION;
    const result = getCity('Paris', cities);
    
    expect(result).toBeDefined();
    expect(result?.name).toBe('Paris');
  });
  it('возвращает undefined, если город не найден', () => {
    const cities = CITIES_LOCATION;
    const result = getCity('NonExistentCity', cities);
    
    expect(result).toBeUndefined();
  });

  it('возвращает undefined при пустом массиве городов', () => {
    const result = getCity('Paris', []);
    
    expect(result).toBeUndefined();
  });

  it('корректно работает с разным регистром', () => {
    const cities = CITIES_LOCATION;
    const result = getCity('AMSterdam', cities);
    
    expect(result?.name).toBe('Amsterdam');
  });
});



