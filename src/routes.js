import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ListBook from './pages/ListBook';
import CreateBook from './pages/CreateBook';
import BookCategory from './pages/BookCategory';
import PageBook from './pages/PageBook';
import UpdateBook from './pages/UpdateBook';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' component={LandingPage} exact />
            <Route path='/library/list/books' component={ListBook} exact />
            <Route path='/library/books/create' component={CreateBook} exact />
            <Route path='/library/books/update/:id' component={UpdateBook} exact />
            <Route path='/library/books' component={BookCategory} exact />
            <Route path='/library/list/books/:id' component={PageBook} exact />
        </BrowserRouter>
    );
};

export default Routes;