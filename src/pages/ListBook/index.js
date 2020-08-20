import React from 'react';

import CardBook from '../../components/CardBook/CardBook';
import Header from '../../components/Header/Header';

import * as S from './styled';
import { Link } from 'react-router-dom';

function ListBook() {
    return (
        <S.Container>
            <Header />

            <S.ShowBook>
               <div className="main">
                    <h2>Livros</h2>

                    <div className="filter">
                        <input type="text" placeholder="Filtrar por categoria" />
                        <Link to="/" className="btn-buscar">Buscar</Link>
                    </div>

                    <CardBook />
               </div>
            </S.ShowBook>
            
        </S.Container>
    );
};

export default ListBook;