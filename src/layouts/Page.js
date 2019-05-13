import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Workers from '../pages/Workers';
import Offer from '../pages/Offer';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/workers" exact component={Workers} />
        <Route path="/offer" exact component={Offer} />
        <Route path="/contact" exact component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;