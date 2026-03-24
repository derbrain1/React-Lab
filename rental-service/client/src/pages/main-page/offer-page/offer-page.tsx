import { useParams } from "react-router-dom";
import type {  OffersList, CityOffer } from "../../../types/offer";
import { NotFoundPage } from "../not-found-page/not-found-page";
import { ReviewForm } from "../../../components/review-form/review-form";
import { ReviewsList } from "../../../components/review-list/review-list";
import { Map } from "../../../components/map/map";
import { useState, useEffect } from "react";
import { CitiesCardList } from "../../../components/cities-card-list/cities-card-list";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchOfferAction, fetchOfferReviewsAction } from "../../../store/api-action";
import { AuthorizationStatus } from "../../../const";
import { LoadingPage } from "../loading-page/loading-page";
import { Header } from "../../../components/header/header";

function OfferPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const offerReviews = useAppSelector((state) => state.offerReviews);
  const allOffers = useAppSelector((state) => state.offers);
  const isLoading = useAppSelector((state) => state.isFullOfferLoading); 
  
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  
    
  const [hoveredOfferId, setHoveredOfferId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchOfferAction(params.id));
      dispatch(fetchOfferReviewsAction(params.id));
    }
  }, [params.id, dispatch]);

  if (isLoading) {
    return <LoadingPage/>
  }
  if (!currentOffer) {
    return <NotFoundPage/>;
  }

  const offer = currentOffer;
 
   
  
  const nearbyOffers = allOffers
    .filter((item) => item.id !== offer.id && item.city.name === offer.city.name)
    .slice(0, 3);

  const currentOfferForMap: OffersList = {
    id: offer.id,
    title: offer.title,
    type: offer.type,
    price: offer.price,
    previewImage: '', 
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
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.photos.map((item) => (
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
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" style={{ 
      width: '100%', height: '100%', objectFit: 'cover',borderRadius: '50%'}}/>
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
              <ReviewsList reviews={offerReviews} />
              {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
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