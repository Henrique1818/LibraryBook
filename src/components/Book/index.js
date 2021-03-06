import React from 'react';

import * as S from './styled';
import { Link } from 'react-router-dom';

function Book({ avatar_url, title, description, authors, publishing_company, category, id}) {
    return (
        <S.Container>
            <div className="image-container">
                <img src={avatar_url} alt={title}/>
                <Link to={`/library/books/update/${id} `} className="btn-editar">Editar</Link>
            </div>

            <div className="content">
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <h3>Autor(a): {authors} <span>Editora: {publishing_company}</span></h3>
                <p className="category"> Categoria: <span>{category}</span></p>
            </div>
        </S.Container>
    )
}

export default Book;