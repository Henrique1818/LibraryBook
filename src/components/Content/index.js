import React from 'react';
import * as S from './styles';

import BookLove from '../../assets/book_love.svg';

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
        </S.Container>
    );
}

export default Wrapper;