import React from 'react';
import * as S from './styles';

function Header() {
    return (
        <S.Container>
            <a href="#" className="logo">Library</a>

            <nav>
                <a href="#">Inicio</a>
                <a href="#">Livros</a>
                <a href="#">Comunidade</a>

                <button type="button">Adicionar Livro</button>
            </nav>
        </S.Container>
    );
}

export default Header;