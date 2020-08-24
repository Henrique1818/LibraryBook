import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import CardBook from '../../components/CardBook/CardBook';
import Filter from '../../components/Filter';

import * as S from './styled';

function Book(props) {
    const typeCategory = props.location.search
    const [books, setBooks] = useState([])

    const category = new URLSearchParams(window.location.search)
    
    useEffect(() => {
        api.get(`/library/book${typeCategory}`)
        .then(response => {
            setBooks(response.data)
        })
    }, [typeCategory]);

    return (
        <>
            <Header />
            <Filter />
        
            <S.Container>
                <h3 id="title">
                    Você está procurando por: <span>{category.get('category')}</span>
                </h3>

                <div key={books._id} className="cards">
                    {
                        books.map(book => (
                            <CardBook key={book._id} avatar_url={book.avatar_url} title={book.title} id={book._id} />
                        ))
                    }
                </div>
            </S.Container>
        </>
    )
}

export default Book;