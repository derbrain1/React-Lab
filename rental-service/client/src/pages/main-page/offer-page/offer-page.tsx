import { useParams } from "react-router-dom";
import { Logo } from "../../../components/logo/logo";
import type { FullOffer, OffersList, CityOffer } from "../../../types/offer";
import { NotFoundPage } from "../not-found-page/not-found-page";
import { ReviewForm } from "../../../components/review-form/review-form";
import type { ReviewType } from "../../../types/review";
import { ReviewsList } from "../../../components/review-list/review-list";
import { Map } from "../../../components/map/map";
import { useState } from "react";
import { CitiesCardList } from "../../../components/cities-card-list/cities-card-list";

type OfferProps = {
  offers: FullOffer[];
  offerList: OffersList[];
  reviews: ReviewType[];
}

function OfferPage({ offers, offerList, reviews }: OfferProps) {
  
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  const favoriteCount = offerList.filter(item => item.isFavorite).length;
  const [hoveredOfferId, setHoveredOfferId] = useState<string | undefined>(undefined);
  if (!offer) {
    return <NotFoundPage/>;
  }

  
  const nearbyOffers = offerList
    .filter((item) => item.id !== offer.id && item.city.name === offer.city.name)
    .slice(0, 3);


  const currentOfferForMap: OffersList = {
    id: offer.id,
    title: offer.title,
    type: offer.type,
    price: offer.price,
    previewImage: offer.images[0] || '', 
    location: offer.location,
    city: offer.city,
    isFavorite: offer.isFavorite || false,
    isPremium: offer.isPremium,
    rating: offer.rating,
  };

  const offersForMap = [currentOfferForMap, ...nearbyOffers];
  
  
  const cityForMap: CityOffer = {
    name: offer.city.name,
    location: {
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    },
  };

  return(
    <div className="page">
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="/img/icon-bookmark.svg"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}                    
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          
          
          <section className="offer__map map">
            <Map 
            offers={offersForMap} 
            city={cityForMap} 
            selectedOfferId={hoveredOfferId || offer.id} 
          />
          </section>
        </section>
        
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CitiesCardList 
                offersList={nearbyOffers} 
                onCardHover={setHoveredOfferId}
                cardClass="near-places__card place-card"
              />
            
          </section>
        </div>
      </main>
    </div>
  );
}

export { OfferPage };