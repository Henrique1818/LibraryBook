import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Filter from '../../components/Filter';
import Book from '../../components/Book';

import * as S from './styled';


function PageBook(props) {
    const bookID = props.match.params.id
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get(`/library/${bookID}`)
        .then(response => {
            setBooks(response.data);
        })
    }, [])

    return (
        <>
            <Header />
            <Filter />
            
            <S.Container>
                <Book 
                    avatar_url={books.avatar_url} 
                    title={books.title} 
                    description={books.description}
                    authors={books.authors}
                    publishing_company={books.publishing_company}
                    category={books.category}
                />
            </S.Container>
        </>
    )
}

export default PageBook;