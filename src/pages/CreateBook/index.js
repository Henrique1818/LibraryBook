import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Develop from '../../assets/develop.svg';

import * as S from './styled';

function CreateBook() {
    const [avatarUrl, setAvatarUrl] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [publishingCompany, setPublishingCompany] = useState()
    const [authors, setAuthors] = useState()
    const [category, setCategory] = useState()

    async function Save() {
        await api.post('/library', {
            avatar_url: avatarUrl,
            title,
            description,
            publishing_company: publishingCompany,
            authors,
            category
        }).then(() => {
            alert('Livro cadastrado com sucesso')
        })
    }

    return (
        <>
            <S.Container>
                <Header />
                <S.Input>
                    <div className="image-container">
                        <img src={Develop} alt="Image de ilustração de login"/>
                    </div>

                    <div className="form-container">
                        <div className="content">
                            <h2>Avatar</h2>
                            <input type="text" placeholder="http://" 
                                onChange={e => setAvatarUrl(e.target.value)}
                                value={avatarUrl}
                            />
                        </div>

                        <div className="content">
                            <h2>Título</h2>
                            <input type="text" placeholder="Nome do Livro" 
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>

                        <div className="content">
                            <h2>Descrição</h2>
                            <textarea rows="5" placeholder="Resumo sobre o Livro" 
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>

                        <div className="content">
                            <h2>Editora</h2>
                            <input type="text" placeholder="Nome da editora" 
                                onChange={e => setPublishingCompany(e.target.value)}
                                value={publishingCompany}
                            />
                        </div>


                        <div className="content">
                            <h2>Autor(a)</h2>
                            <input type="text" placeholder="Nome do autor(a)" 
                                onChange={e => setAuthors(e.target.value)}
                                value={authors}
                            />
                        </div>

                        <div className="content">
                            <h2>Categoria</h2>
                            <input type="text" placeholder="Nome da categoria ex: fantasia" 
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                            />
                        </div>
                        <Link to="/library/list/books" className="btn-save" onClick={Save}>Salvar</Link>
                    </div>
                </S.Input>

            </S.Container>
        </>
    )
}

export default CreateBook;