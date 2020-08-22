import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import CardBook from '../../components/CardBook/CardBook';
import Header from '../../components/Header/Header';

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
        <S.Container>
            <Header />

            <S.ShowBook>
               <div className="main">
                    <h2>Livros</h2>

                    <div className="filter">
                        <input type="text" value="" placeholder="Filtrar por categoria" />
                        <Link to="/" className="btn-buscar">Buscar</Link>
                    </div>

                    <div className="content">
                        {
                            books.map(book => (
                                <CardBook avatar_url={book.avatar_url} title={book.title} id={book._id} />
                            ))
                        }
                    </div>
               </div>
            </S.ShowBook>
            
        </S.Container>
    );
};

export default ListBook;