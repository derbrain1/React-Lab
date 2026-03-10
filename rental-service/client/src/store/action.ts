import { createAction } from '@reduxjs/toolkit';
import type { CityOffer, FullOffer, OffersList } from '../types/offer';
import { type AuthorizationStatusType } from '../types/authorization-status';
import type { UserData } from '../types/user-data';
import type { ReviewType } from '../types/review';


const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
    payload: city
}));
 
const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
    payload: offers
}));
const setError = createAction('setError', (error: string | null) => ({
    payload: error
}));
const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');
const setUser = createAction<UserData | null>('user/setUser');
const setCurrentOffer = createAction('offers/setCurrentOffer', (offer: FullOffer | null) => ({
    payload: offer
}));

const setOfferReviews = createAction('offers/setOfferReviews', (reviews: ReviewType[]) => ({
    payload: reviews
}));
const setFullOfferLoading = createAction<boolean>('offer/setFullOfferLoading');
export {setOffersDataLoadingStatus, setError, changeCity, offersCityList, requireAuthorization, setUser, setCurrentOffer, setOfferReviews, setFullOfferLoading };