import React, { useState } from 'react'
import { Link,  } from 'react-router-dom';

import * as S from './styled';

function Filter() {
    const [typeCategory, setTypeCategory] = useState('');

    return (
        <S.Container>
            <div className="filter">
                <input
                    type="text"
                    onChange={ e => { setTypeCategory( e.target.value)}}
                    placeholder="Filtrar por categoria: ficcao, auto-ajuda"
                />
                <Link to={`/library/books?category=${typeCategory}`} className="btn-buscar">Buscar</Link>
            </div>
        </S.Container>
    );
}

export default Filter;