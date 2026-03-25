import type { AxiosInstance } from 'axios'; 
import {createAsyncThunk} from '@reduxjs/toolkit'; 
import type { AppDispatch, State } from '../types/state.js'; 
import type { OffersList } from '../types/offer.js'; 
import { offersCityList, requireAuthorization,  setCurrentOffer,  setError, setFullOfferLoading, setOfferReviews, setOffersDataLoadingStatus, setUser} from './action'; 
import {saveToken, dropToken} from '../services/token'; 
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const'; 
import type { AuthData, UserData } from '../types/user-data'; 
import { store } from './index.js';


const fetchOffersAction = createAsyncThunk<void, undefined, { 
dispatch: AppDispatch; 
state: State; 
extra: AxiosInstance; 
}>( 
'data/fetchOffers', 
async (_arg, {dispatch, extra: api}) => { 
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OffersList[]>(APIRoute.Offers); 
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(offersCityList(data)); 
    }, 
); 
const checkAuthAction = createAsyncThunk<void, undefined, { 
dispatch: AppDispatch; 
state: State; 
extra: AxiosInstance; 
}>( 
'user/checkAuth', 
async (_arg, {dispatch, extra: api}) => { 
try { 
const { data } = await api.get<UserData>(APIRoute.Login);
dispatch(requireAuthorization(AuthorizationStatus.Auth)); 
dispatch(setUser(data));
} catch { 
dispatch(requireAuthorization(AuthorizationStatus.NoAuth)); 
dispatch(setUser(null));
} 
}, 
); 
const loginAction = createAsyncThunk< 
UserData,        
AuthData,        
{ dispatch: AppDispatch; state: State; extra: AxiosInstance } 
>( 
'user/login', 
async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => { 
   try { 
     const { data } = await api.post<UserData>(APIRoute.Login, { email, password }); 
     saveToken(data.token); 
     await dispatch(checkAuthAction()).unwrap();
     dispatch(requireAuthorization(AuthorizationStatus.Auth)); 

     return data; 
   
   } catch (err) { 
     console.log(err);
     dropToken(); 
     dispatch(requireAuthorization(AuthorizationStatus.NoAuth)); 
     
     return rejectWithValue('Login failed'); 
   } 
 } 
);
const logoutAction = createAsyncThunk<void, undefined, { 
  dispatch: AppDispatch; 
  state: State; 
  extra: AxiosInstance; 
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => { 
    await api.delete(APIRoute.Logout); 
    dropToken(); 
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth)); 
  }, 
);
const clearErrorAction = createAsyncThunk( 
    'clearError', 
    () => { 
        setTimeout( 
            () => store.dispatch(setError(null)), 
            TIMEOUT_SHOW_ERROR, 
        ); 
    }, 
);


const fetchOfferAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOffer',
    async (offerId, {dispatch, extra: api}) => {
        dispatch(setFullOfferLoading(true));
        try {
            const { data } = await api.get(`${APIRoute.Offers}/${offerId}`);
            dispatch(setCurrentOffer(data));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            dispatch(setCurrentOffer(null));
        } finally {
            dispatch(setFullOfferLoading(false));
        }
    }
);

const fetchOfferReviewsAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOfferReviews',
    async (offerId, {dispatch, extra: api}) => {
        const { data } = await api.get(`${APIRoute.Comments}/${offerId}`);
        dispatch(setOfferReviews(data));
    }
);



const postReviewAction = createAsyncThunk<void, { offerId: string; comment: string; rating: number }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/postReview',
    async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
        await api.post(`${APIRoute.Comments}/${offerId}`, { comment, rating });
        dispatch(fetchOfferReviewsAction(offerId));
    }
);
const toggleFavoriteAction = createAsyncThunk<
  void,
  { offerId: string; status: boolean },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'user/toggleFavorite',
  async ({ offerId, status }, { dispatch, getState, extra: api, rejectWithValue }) => {
    try {
      await api.post(`${APIRoute.Favorite}/${offerId}/${status ? '1' : '0'}`);
      
      const state = getState();
      const offers = state.offers.map(offer => 
        offer.id === offerId ? { ...offer, isFavorite: status } : offer
      );
      dispatch(offersCityList(offers));
      
      if (state.currentOffer?.id === offerId) {
        dispatch(setCurrentOffer({ ...state.currentOffer, isFavorite: status }));
      }
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return rejectWithValue('Failed to toggle favorite');
    }
  }
);
export {clearErrorAction, toggleFavoriteAction, fetchOffersAction, checkAuthAction, loginAction, logoutAction, setCurrentOffer, postReviewAction, fetchOfferAction, fetchOfferReviewsAction}