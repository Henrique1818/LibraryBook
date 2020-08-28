import React from 'react';
import BookLove from '../../assets/book_lover.svg';

import * as S from './styled';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <S.Container>
            <header className="header">
                <div>
                    <h2 className="title">
                        Library
                    </h2>

                    <p className="subtitle">
                        Encontre seus livros favoritos e os demais variados temas.
                    </p>
                </div>
                
                <img className="image-landing-page" src={BookLove} alt="amor por livros"/>
            </header>


            <nav className="buttons">
                <Link to="/bookCreate" className="add-button btn-config" type="button">
                    Adicionar livro
                </Link>
                <Link to="/listBook" className="recente-button btn-config" type="button">
                    Livros recentes
                </Link>
            </nav>
        </S.Container>
    );
};

export default LandingPage;