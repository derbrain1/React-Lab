import type { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { FavoritesPage } from "../../pages/main-page/favorites-page/favorites-page";
import { LoginPage } from "../../pages/main-page/login-page/login-page";
import { OfferPage } from "../../pages/main-page/offer-page/offer-page";
import { NotFoundPage } from "../../pages/main-page/not-found-page/not-found-page";

import type { FullOffer, OffersList } from "../../types/offer";
import offersList from "../../mocks/offers-list";
import type { ReviewType } from "../../types/review";
import { useAppSelector } from "../../hooks";
import { LoadingPage } from "../../pages/main-page/loading-page/loading-page";
import { PrivateRoute } from "../private-route/private-route";

type AppMainPageProps = {
    rentalOffersCount: number;
    offerList: OffersList[];
    offers: FullOffer[];
    reviews: ReviewType[];
}

function App({ offers, reviews}: AppMainPageProps): JSX.Element{
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const isQuestionDataLoading = useAppSelector((state) => state.isOffersDataLoading);
    if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionDataLoading){
        return (
            <LoadingPage/>
        );
    }
    return(
        <BrowserRouter>
        <Routes>
            
            <Route
            path={AppRoute.Main}
            element={<MainPage />}/>
            <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={authorizationStatus}>
                    <FavoritesPage  />
                </PrivateRoute>}/>
            
            <Route path={AppRoute.Login} element={<LoginPage/>}/>
            <Route path={ `${AppRoute.Offer}/:id` } element={<OfferPage  offers={offers}  offerList={offersList} reviews={reviews} />}/>
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
        
        </BrowserRouter>
        
    )
}

export { App};