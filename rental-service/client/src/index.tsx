import { App } from './components/app/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Setting } from './const'
import offers from './mocks/offers'
import offersList from './mocks/offers-list'
import { reviews } from './mocks/reviews'
import { Provider } from 'react-redux'
import { store } from './store'
import { checkAuthAction } from './store/api-action'
import { fetchOffersAction } from './store/api-action'
import { ErrorMessage } from './components/error-message/error-message'

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction()); 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage/>
    <App
      rentalOffersCount={Setting.rentOfferCount}
      offers={offers}
      offerList={offersList}
      reviews={reviews}
      />
      </Provider>
  </React.StrictMode>,
)
