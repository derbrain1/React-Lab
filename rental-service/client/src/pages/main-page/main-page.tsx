import type { JSX } from "react";
import { Logo } from "../../components/logo/logo";
import type { FullOffer, OffersList } from "../../types/offer";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { Map } from "../../components/map/map";
import { useState } from 'react';
import { CitiesList } from "../../components/cities-list/cities-list";
import { useAppSelector } from "../../hooks/index.ts";
import { getOffersByCity, sortOffersByType } from "../../utils";
import type { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options.tsx";

type MainPageProps = {
    rentalOffersCount: number;
    offers: FullOffer[];
    offerList: OffersList[];
}

function MainPage({ offerList }: MainPageProps): JSX.Element {
  const favoriteCount = offerList.filter(offer => offer.isFavorite).length;
  
  const selectedCity = useAppSelector((state) => state.city);
  const offersListSelector = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity?.name ?? '', offersListSelector);
  const rentalOffersCount = selectedCityOffers.length;
  
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
  const [hoveredOfferId, setHoveredOfferId] = useState<string | undefined>(undefined);
  
  const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">{favoriteCount}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
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
      </main>
    </div>
  );
}

export { MainPage };