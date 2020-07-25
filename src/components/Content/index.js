import React from 'react';
import * as S from './styles';

import BookLove from '../../assets/book_love.svg';
import EmailBook from '../../assets/email.svg';

function Wrapper() {
    return (
        <S.Container>
           <S.Wrapper>
                <img src={BookLove} alt="ilustração de amor por livros"/>

                <p>Encontre seus livros favoritos e os mas variaveis temas.</p>
           </S.Wrapper>

            <S.Filters>

                <h2>Categoria</h2>

                <div className="btn-container">
                    <button type="button">Ficção</button>
                    <button type="button">Aventura</button>
                    <button type="button">Drama</button>
                    <button type="button">Romance</button>
                    <button type="button">Auto-ajuda</button>
                    <button type="button">Ebook</button>
                    <button type="button">Documentario</button>
                    <button type="button">Conto de Fada</button>
                    <button type="button">HG - Gibi</button>
                    <button type="button">Receitas</button>
                </div>
            </S.Filters>

            <S.BookCard>
                <div className="cards">
                    
                </div>
                <div className="cards"></div>
                <div className="cards"></div>

                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
            </S.BookCard>

            <S.Community>
                <div className="email-content">
                    <h2>Receba novidades no seu e-mail</h2>

                    <div className="email-info">
                        <input type="email" placeholder="Digite seu e-mail"/>
                        <button type="button">Enviar</button>
                    </div>
                </div>

                <img className="emailBook" src={EmailBook} alt="Ilustração de um email"/>
            </S.Community>
        </S.Container>
    );
}

export default Wrapper;