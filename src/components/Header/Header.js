import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

function Header() {
    return (
        <S.LibraryHeader>
            <div className="header">
                <Link to="/">
                    <span className="material-icons arrow_back">
                        arrow_back
                    </span>
                </Link>

                <Link to="/">
                    <h2>Library</h2>
                </Link>
            </div>
        </S.LibraryHeader>
    );
};

export default Header;