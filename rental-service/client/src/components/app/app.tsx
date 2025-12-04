import type { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { FavoritesPage } from "../../pages/main-page/favorites-page/favorites-page";
import { LoginPage } from "../../pages/main-page/login-page/login-page";
import { OfferPage } from "../../pages/main-page/offer-page/offer-page";
import { NotFoundPage } from "../../pages/main-page/not-found-page/not-found-page";

import type { FullOffer, OffersList } from "../../mocks/offer";
import offersList from "../../mocks/offers-list";


type AppMainPageProps = {
    rentalOffersCount: number;
    offerList: OffersList[];
    offers: FullOffer[];
}

function App({rentalOffersCount, offers}: AppMainPageProps): JSX.Element{

    return(
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount} 
            offers={offers} offerList={offersList}/>}/>
            <Route path={AppRoute.Favorites} element={<FavoritesPage favoriteOffers={offersList}/>}/>
            <Route path={AppRoute.Login} element={<LoginPage/>}/>
            <Route path={ `${AppRoute.Offer}/:id` } element={<OfferPage offers={offers}/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
        
        </BrowserRouter>
        
    )
}

export { App};