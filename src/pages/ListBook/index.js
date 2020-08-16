import React from 'react';
import { Link } from 'react-router-dom';

import CardBook from '../../components/CardBook';

import * as S from './styled';

function ListBook() {
    return (
        <S.Container>
            <S.Header>
                <div className="header">
                    <Link to="/">
                        <span className="material-icons arrow_back">
                            arrow_back
                        </span>
                    </Link>

                    <Link to="/">
                        <h2>Library</h2>
                    </Link>
                </div>
            </S.Header>

            <S.ShowBook className="container">
                <h2>Livros</h2>
                <CardBook />
            </S.ShowBook>
            
        </S.Container>
    );
};

export default ListBook;