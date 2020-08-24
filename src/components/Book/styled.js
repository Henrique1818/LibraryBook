import styled from 'styled-components';

export const Container = styled.section`
    max-width: 900px;

    display: flex;
    flex-direction: column;
    justify-items: center;

    margin: 5rem auto 0;

    .image-container {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-wrap: wrap;

        img {
            width: 80%;
            border-radius: 0.8rem;
            margin-bottom: 5rem;
        }

        .btn-editar {
            background: var(--color-button-red);
            padding: 1.8rem 3.8rem;
            border-radius: 0.8rem;
            font-size: 1.8rem;
            color: var(--color-text-light);
            transition: background color 200ms ease-in-out;

            &:hover {
                background: var(--color-background-dark);
                color: var(--color-button-red);
                border: 1px solid var(--color-button-red);
            }
        }
    }

    .content {
        min-width: 300px;
        margin: 3rem auto;

        display: grid;
        align-items: center;
        justify-content: center;

        h2 {
            width: 90%;
            margin: 0 auto;
            text-align: center;
            color: var(--color-text-light);

            font-size: 3.2rem;
            line-height: 4rem;
            text-transform: capitalize;
        }
        
        .description {
            width: 90%;
            text-align: justify;
            color: var(--color-text-gray);

            font-size: 2rem;
            line-height: 3rem;
            margin: 1rem auto 0;
            padding: 1rem;
        }

        h3 {
            margin: 2rem auto;
            text-align: center;
            color: var(--color-text-light);
            font-size: 1.5rem;

            span {
                background: var(--color-button-red);
                margin-left: 1rem;
                padding: 1.2rem 2rem;
                border-radius: 1rem;
            }
        }

        .category {
            display: inline-block;
            max-width: 500px;
            text-align: left;
            color: var(--color-text-light);

            margin-top: 3rem;
            margin-bottom: 8rem;
            margin-left: 2rem;

            font-size: 1.8rem;

            span {
                background: var(--color-text-purple);
                border-radius: 1rem;
                padding: 1.4rem 2.4rem;
                margin-left: 1rem;
            }
        }
    }

    @media (min-width: 700px) {
        .image-container {
            margin-top: 5rem; 

            img {
                width: 62%;
                border-radius: 0.8rem;
                margin-bottom: 5rem;
            }

            .btn-editar {
                background: var(--color-button-red);
                padding: 1.8rem 3.8rem;
                border-radius: 0.8rem;
                font-size: 1.8rem;
                color: var(--color-text-light);
                transition: background color 200ms ease-in-out;

                &:hover {
                    background: var(--color-background-dark);
                    color: var(--color-button-red);
                    border: 1px solid var(--color-button-red);
                }
            }
        }

        .content {
            h2 {
                width: 90%;
                margin: 0 auto;
                text-align: center;
                color: var(--color-text-light);

                font-size: 3.2rem;
                line-height: 4rem;
                text-transform: capitalize;
            }
            
            .description {
                width: 90%;
                text-align: justify;
                color: var(--color-text-gray);

                font-size: 2rem;
                line-height: 3rem;
                margin: 1rem auto 0;
                padding: 1rem;
            }

            h3 {
                margin: 2rem auto;
                text-align: center;
                color: var(--color-text-light);
                font-size: 2rem;

                span {
                    background: var(--color-button-red);
                    margin-left: 1rem;
                    padding: 1.2rem 2rem;
                    border-radius: 1rem;
                }
            }

            .category {
                display: inline-block;
                max-width: 500px;
                text-align: left;
                color: var(--color-text-light);

                margin-top: 3rem;
                margin-bottom: 8rem;
                margin-left: 2rem;

                font-size: 2rem;

                span {
                    background: var(--color-text-purple);
                    border-radius: 1rem;
                    padding: 1.4rem 2.4rem;
                    margin-left: 1rem;
                }
            }
        }
    }
`