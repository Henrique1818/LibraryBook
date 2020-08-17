import React from 'react';

import CardBook from '../../components/CardBook/CardBook';
import Header from '../../components/Header/Header';

import * as S from './styled';

function ListBook() {
    return (
        <S.Container>
            <Header />

            <S.ShowBook>
               <div className="main">
                    <h2>Livros</h2>
                    <CardBook />
               </div>
            </S.ShowBook>
            
        </S.Container>
    );
};

export default ListBook;