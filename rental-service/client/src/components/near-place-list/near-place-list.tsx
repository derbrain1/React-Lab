import type { OffersList } from '../../types/offer';
import { NearPlaceCard } from '../near-place-card/near-place-card';

type NearPlacesListProps = {
  offers: OffersList[];
};

function NearPlacesList({ offers }: NearPlacesListProps): React.JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <NearPlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export { NearPlacesList };
