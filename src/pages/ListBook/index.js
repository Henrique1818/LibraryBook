import React, { useState, useEffect } from 'react';
import { Link,  } from 'react-router-dom';

import api from '../../services/api';

import CardBook from '../../components/CardBook/CardBook';
import Header from '../../components/Header/Header';

import * as S from './styled';

function ListBook(props) {
    
    const [books, setBooks] = useState([]);
    const [typeCategory, setTypeCategory] = useState('');

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
                        <input type="text" onChange={ e => { setTypeCategory( e.target.value)}} placeholder="Filtrar por categoria" />
                        <Link to={`/book?category=${typeCategory}`} className="btn-buscar">Buscar</Link>
                    </div>

                    <div key={books.id} className="content">
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