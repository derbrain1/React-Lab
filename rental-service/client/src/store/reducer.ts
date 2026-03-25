import { createReducer} from "@reduxjs/toolkit";
import { getCity } from '../utils';
import {changeCity, offersCityList, requireAuthorization,  setCurrentOffer,  setError, setFullOfferLoading, setOfferReviews, setOffersDataLoadingStatus, setUser } from './action';
import { CITIES_LOCATION } from '../const';
import { AuthorizationStatus } from "../const";
import type { CityOffer, FullOffer, OffersList } from "../types/offer";
import type { AuthorizationStatusType } from "../types/authorization-status";
import type { UserData } from "../types/user-data";
import type { ReviewType } from "../types/review";




const defaultCity = getCity('Paris', CITIES_LOCATION);

export type InitialState = {
    city: CityOffer | undefined;
    offers: OffersList[];
    authorizationStatus: AuthorizationStatusType;
    error: string | null;
    isOffersDataLoading: boolean; 
    user: UserData | null;
    currentOffer: FullOffer | null;
    offerReviews: ReviewType[];
    isFullOfferLoading: boolean; 
  
}

const initialState: InitialState = {
    city: defaultCity,
    offers: [],
    authorizationStatus: AuthorizationStatus.Unknown,
    error: null,
    isOffersDataLoading: false,
    user: null,
    currentOffer: null,
    offerReviews: [],
    isFullOfferLoading: false,
    
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(offersCityList, (state, action) => {
            state.offers = action.payload;
        })
        .addCase(requireAuthorization, (state, action) => {
            state.authorizationStatus = action.payload;
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(setOffersDataLoadingStatus, (state, action) => { 
            state.isOffersDataLoading = action.payload; 
        })
        .addCase(setUser, (state, action) => { 
            state.user = action.payload; 
        })
        
        .addCase(setCurrentOffer, (state, action) => {
            state.currentOffer = action.payload;
        })
        .addCase(setOfferReviews, (state, action) => {
            state.offerReviews = action.payload;
        })
        .addCase(setFullOfferLoading, (state, action) => {
            state.isFullOfferLoading = action.payload;
        });    
    
});



export { reducer };