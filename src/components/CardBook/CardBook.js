import React from 'react';

import Harry from '../../assets/images.jpeg';

import * as S from './styled';
import { Link } from 'react-router-dom';

function CardBook() {
    return (
        <S.Container>
            <div>
                <div className="cards">
                    <div className="container">
                        <img src={Harry} alt="Harry e a pedra filosofal"/>

                        <div className="content show">
                            <h1>Harry Potter e a pedra filosofal</h1>
                            <Link to="/" className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="container">
                        <img src={Harry} alt="Harry e a pedra filosofal"/>

                        <div className="content show">
                            <h1>Harry Potter e a pedra filosofal</h1>
                            <Link to="/" className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="container">
                        <img src={Harry} alt="Harry e a pedra filosofal"/>

                        <div className="content show">
                            <h1>Harry Potter e a pedra filosofal</h1>
                            <Link to="/" className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="cards">
                    <div className="container">
                        <img src={Harry} alt="Harry e a pedra filosofal"/>

                        <div className="content show">
                            <h1>Harry Potter e a pedra filosofal</h1>
                            <Link to="/" className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="container">
                        <img src={Harry} alt="Harry e a pedra filosofal"/>

                        <div className="content show">
                            <h1>Harry Potter e a pedra filosofal</h1>
                            <Link to="/" className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="container">
                        <img src={Harry} alt="Harry e a pedra filosofal"/>

                        <div className="content show">
                            <h1>Harry Potter e a pedra filosofal</h1>
                            <Link to="/" className="btn-ver-mais">
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    );
};

export default CardBook;