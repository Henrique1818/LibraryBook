import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

function CardBook({avatar_url, title, id}) {
    return (
        <S.Container>
            <div className="cards">
                    <div className="container">
                        <img src={avatar_url} alt={title}/>

                        <div className="content show">
                            <h1>{title}</h1>
                            <Link to={`/libary/${id}`} className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
             </div>
        </S.Container>
    );
};

export default CardBook;