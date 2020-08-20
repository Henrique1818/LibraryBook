import React from 'react';
import { Link } from 'react-router-dom';

import CardBook from '../../components/CardBook/CardBook';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

import * as S from './styled';

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
                    <Footer />
               </div>
            </S.ShowBook>
            
        </S.Container>
    );
};

export default ListBook;