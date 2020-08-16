import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ListBook from './pages/ListBook';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' component={LandingPage} exact />
            <Route path='/createBook' component={LandingPage} />
            <Route path='/listBook' component={ListBook} />
        </BrowserRouter>
    );
};

export default Routes;