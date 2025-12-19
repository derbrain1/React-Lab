import type { OffersList } from '../../types/offer';
import { CitiesCard } from '../cities-card/cities-card';

type CitiesCardListProps = {
  offersList: OffersList[];
  onCardHover?: (offerId: string | undefined) => void;
  cardClass: string;
};

function CitiesCardList({ offersList, onCardHover, cardClass }: CitiesCardListProps) {
  let myClassName = "cities__places-list places__list tabs__content";
  if (cardClass !== "cities__card place-card") {
    myClassName = "near-places__list places__list";
  }
  return (
    <div className={myClassName}>
      {Array.from(offersList, (item) => (
        <CitiesCard
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          previewImage={item.previewImage}
          isPremium={item.isPremium}
          isFavorite={item.isFavorite}
          rating={item.rating}
          onMouseEnter={() => onCardHover?.(item.id)}
          onMouseLeave={() => onCardHover?.(undefined)}
          cardClass= {cardClass}
        />
      ))}
    </div>
  );
}

export { CitiesCardList };