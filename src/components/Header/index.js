import React from 'react';
import * as S from './styles';
import clickButton from '../../utils/MenuBtn';


function Header() {
    return (
        <S.Container>
            <a href="/" className="logo">Library</a>

            <div className="menu">
                <div class="menu-toggle" onClick={clickButton}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>

                <nav>
                    <ul>
                        <a href="/">Inicio</a>
                        <a href="/">Livros</a>
                        <a href="/">Comunidade</a>

                        <button type="button">Adicionar Livro</button>
                    </ul>
                </nav>
            </div>
        </S.Container>
    );
}

export default Header;