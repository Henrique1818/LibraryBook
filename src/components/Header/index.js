import React from 'react';
import Style from './style.css';

function Header() {
    return (
        <div className="container">
            <a href="#" className="logo">Library</a>

            <nav>
                <a href="#">Inicio</a>
                <a href="#">Livros</a>
                <a href="#">Comunidade</a>

                <button type="button">Adicionar Livro</button>
            </nav>
        </div>
    );
}

export default Header;