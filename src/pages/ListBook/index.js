import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Filter from '../../components/Filter';
import CardBook from '../../components/CardBook/CardBook';

import * as S from './styled';

function ListBook() {
    
    const [books, setBooks] = useState([]);

    async function loadBook() {
        await api.get(`/library`)
        .then(response => {
            setBooks(response.data);
        })
    }

    useEffect(() => {
        loadBook();
    }, [])
    
    return (
        <>
            <S.Container>
                <Header />
                <Filter />
                <S.ShowBook>
                    <div className="main">
                        <h2>Livros</h2>

                        <div className="content">
                            {
                                books.map(book => (
                                    <CardBook key={book._id} avatar_url={book.avatar_url} title={book.title} id={book._id} />
                                ))
                            }
                        </div>
                    </div>
                </S.ShowBook>
            </S.Container>
        </>
    );
};

export default ListBook;