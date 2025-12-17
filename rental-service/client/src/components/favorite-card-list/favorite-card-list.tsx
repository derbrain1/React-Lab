import { FavoriteCard } from "../favorite-card/favorite-card";
import type { OffersList } from "../../types/offer";

type FavoriteCardListProps = {
  favoriteOffers: OffersList[];
};

function groupOffersByCity(offers: OffersList[]) {
  return offers.reduce((acc, offer) => {
    const cityName = offer.city.name; 
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as Record<string, OffersList[]>);
}

function FavoriteCardList({ favoriteOffers }: FavoriteCardListProps) {
  
  const filteredFavorites = favoriteOffers.filter(offer => offer.isFavorite);
  if (filteredFavorites.length === 0) {
    return (
      <section className="favorites favorites--empty">
        <h1 className="favorites__title">Saved listing</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
        </div>
      </section>
    );
  }

  const offersByCity = groupOffersByCity(filteredFavorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{cityName}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {cityOffers.map((offer) => (
                <FavoriteCard
                  key={offer.id}
                  id={offer.id}
                  title={offer.title}
                  type={offer.type}
                  price={offer.price}
                  isPremium={offer.isPremium}
                  previewImage={offer.previewImage}
                  rating={offer.rating}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { FavoriteCardList };