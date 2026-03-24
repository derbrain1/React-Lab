import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { AuthorizationStatus, AppRoute } from '../../const';

function Header() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const offers = useAppSelector((state) => state.offers);
  
  const favoriteCount = offers.filter(offer => offer.isFavorite).length;

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <Link 
                      className="header__nav-link header__nav-link--profile" 
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {user?.avatar && (
                          <img 
                            src={`http://localhost:5000${user.avatar}`}
                            alt="User avatar"
                            style={{ 
                              borderRadius: '50%', 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover' 
                            }}
                          />
                        )}
                      </div>
                      <span className="header__user-name user__name">
                        {user?.email || user?.username || 'User'}
                      </span>
                      <span className="header__favorite-count">
                        {favoriteCount}
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a 
                      className="header__nav-link" 
                      href="#"
                      onClick={handleLogout}
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link 
                    className="header__nav-link header__nav-link--profile" 
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };