import React from 'react';
import BookLove from '../../assets/book_lover.svg';

import * as S from './styled';

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
                <button className="add-button btn-config" type="button">Adicionar livro</button>
                <button className="recente-button btn-config" type="button">Livros recentes</button>
            </nav>
        </S.Container>
    );
}

export default LandingPage;