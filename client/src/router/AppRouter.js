import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import Header from '../components/Header';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route component={ProductsList} path='/' exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
