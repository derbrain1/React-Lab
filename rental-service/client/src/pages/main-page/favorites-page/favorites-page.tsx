import { FavoriteCardList } from "../../../components/favorite-card-list/favorite-card-list";
import {  useAppSelector } from "../../../hooks";
import { Header } from "../../../components/header/header";

function FavoritesPage() {
  const offers = useAppSelector((state) => state.offers); 
  const favoriteOffers = offers.filter(offer => offer.isFavorite);
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoriteCardList favoriteOffers={favoriteOffers} />
        </div>
      </main>
      
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export { FavoritesPage };