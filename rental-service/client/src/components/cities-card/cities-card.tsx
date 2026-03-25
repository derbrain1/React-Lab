import { AppRoute } from "../../const";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleFavoriteAction } from "../../store/api-action";
import { AuthorizationStatus } from "../../const";

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  rating: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  cardClass: string;
};

function CitiesCard ({ 
  id, 
  title, 
  type, 
  price, 
  previewImage, 
  isPremium, 
  rating,
  isFavorite,
  onMouseEnter,
  onMouseLeave,
  cardClass
}: CitiesCardProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  
  let imgClassName="cities__image-wrapper place-card__image-wrapper";
  if (cardClass !== "cities__card place-card") {
    imgClassName = "near-places__image-wrapper place-card__image-wrapper";
  }
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(toggleFavoriteAction({ offerId: id, status: !isFavorite }));
  };
  
  return(
    <article 
      className={cardClass} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={imgClassName}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button 
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="/img/icon-bookmark.svg"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { CitiesCard };