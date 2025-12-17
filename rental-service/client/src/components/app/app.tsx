import type { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { FavoritesPage } from "../../pages/main-page/favorites-page/favorites-page";
import { LoginPage } from "../../pages/main-page/login-page/login-page";
import { OfferPage } from "../../pages/main-page/offer-page/offer-page";
import { NotFoundPage } from "../../pages/main-page/not-found-page/not-found-page";

import type { FullOffer, OffersList } from "../../types/offer";
import offersList from "../../mocks/offers-list";
import type { ReviewType } from "../../types/review";


type AppMainPageProps = {
    rentalOffersCount: number;
    offerList: OffersList[];
    offers: FullOffer[];
    reviews: ReviewType[];
}

function App({rentalOffersCount, offers, reviews}: AppMainPageProps): JSX.Element{

    return(
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount} 
            offers={offers} offerList={offersList}/>}/>
            <Route path={AppRoute.Favorites} element={<FavoritesPage favoriteOffers={offersList}/>}/>
            <Route path={AppRoute.Login} element={<LoginPage/>}/>
            <Route path={ `${AppRoute.Offer}/:id` } element={<OfferPage  offers={offers}  offerList={offersList} reviews={reviews} />}/>
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
        
        </BrowserRouter>
        
    )
}

export { App};