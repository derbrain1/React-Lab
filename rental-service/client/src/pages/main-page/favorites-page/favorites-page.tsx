import { Logo } from "../../../components/logo/logo";
import { FavoriteCardList } from "../../../components/favorite-card-list/favorite-card-list";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { logoutAction } from "../../../store/api-action";



function FavoritesPage() {
  const dispatch = useAppDispatch();
  const UserData = useAppSelector((state) => state.user);
  const offers = useAppSelector((state) => state.offers); 
  const favoriteCount = offers.filter(offer => offer.isFavorite).length;
  const favoriteOffers = offers.filter(offer => offer.isFavorite);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img 
                            src={`http://localhost:5000${UserData?.avatar}`} 
                            alt="avatar" style={{ borderRadius: '50%', width: '100%', height: '100%' }}
                          />
                    </div>
                    <span className="header__user-name user__name">{UserData?.email}</span>
                    <span className="header__favorite-count">{favoriteCount}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                      <a 
                        className="header__nav-link" 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(logoutAction());
                        }}
                      >
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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