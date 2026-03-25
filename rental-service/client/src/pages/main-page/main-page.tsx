import type { JSX } from "react";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { Map } from "../../components/map/map";
import { useState } from 'react';
import { CitiesList } from "../../components/cities-list/cities-list";
import { useAppSelector } from "../../hooks/index.ts";
import { getOffersByCity, sortOffersByType } from "../../utils";
import type { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options.tsx";
import { Header } from "../../components/header/header.tsx";

function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const offersListSelector = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity?.name ?? '', offersListSelector);
  const rentalOffersCount = selectedCityOffers.length;
  
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
  const [hoveredOfferId, setHoveredOfferId] = useState<string | undefined>(undefined);
  
  const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

  return(
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
        
        
        {selectedCityOffers.length === 0 ? (
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {selectedCity?.name}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <b className="places__found">
                  {rentalOffersCount} places to stay in {selectedCity?.name}
                </b>
                <SortOptions 
                  activeSorting={activeSort} 
                  onChange={(newSorting) => setActiveSort(newSorting)} 
                />
                <CitiesCardList 
                  offersList={sortedOffers} 
                  onCardHover={setHoveredOfferId}
                  cardClass="cities__card place-card"
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map 
                    city={selectedCityOffers[0]?.city} 
                    offers={selectedCityOffers} 
                    selectedOfferId={hoveredOfferId}
                  />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export { MainPage };