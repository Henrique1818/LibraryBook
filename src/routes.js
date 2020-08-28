import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ListBook from './pages/ListBook';
import CreateBook from './pages/CreateBook';
import BookCategory from './pages/BookCategory';
import PageBook from './pages/PageBook';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' component={LandingPage} exact />
            <Route path='/bookCreate' component={CreateBook} exact />
            <Route path='/listBook' component={ListBook} exact />
            <Route path='/book' component={BookCategory} exact />
            <Route path='/library/:id' component={PageBook} />
        </BrowserRouter>
    );
};

export default Routes;