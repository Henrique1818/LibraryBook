import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const ShowBook = styled.main`
    width: 100%;
    min-width: 300px;
    margin: 0 auto;

    .main {
        display: grid;
        align-items: center;
        width: 100%;
        height: 4rem;
        margin: 0 auto;
        padding: 3rem 1rem;

        h2 {
            display: inline-block;
            color: var(--color-text-light);
            font-size: 3.6rem;
            line-height: 4.6rem;
            position: relative;
            margin-left: 3rem;
            margin-bottom: 2rem;

            &::after {
                content: '';
                width: 108px;
                height: 2px;
                background: var(--color-text-purple);
                position: absolute;
                left: 0;
                bottom: -0.4rem;
            }
        }

        .filter {
            display: flex;
            flex-direction: column;
            margin-left: 3rem;
            margin-top: 3rem;
            margin-bottom: 2rem;

            input {
                padding: 2rem 3rem;
                border-radius: 0.8rem;
                margin-right: 2rem;
                margin-bottom: 2rem;
                color: var(--color-text-purple);

                &:focus {
                    box-shadow: 4px 4px 12px -2px rgba(108, 99, 255, 0.8);
                }
            }

            .btn-buscar {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 15rem;
                font-size: 2rem;
                padding: 2rem 3rem;
                border-radius: 0.8rem;
                background: var(--color-text-purple);
                color: var(--color-text-light);
                transition: background color 200ms ease-in-out;

                &:hover {
                    background: var(--color-background-dark);
                    color: var(--color-text-purple);
                    border: 1px solid var(--color-text-purple);
                }
            }
        }
    }

    @media (min-width: 700px) {
        .main {
            max-width: 900px;
            width: 90%;
            margin: 0 auto;

                h2 {
                    display: inline-block;
                    color: var(--color-text-light);
                    font-size: 4.6rem;
                    line-height: 5.6rem;

                    &::after {
                    content: '';
                    width: 180px;
                    height: 2px;
                    background: var(--color-text-purple);
                    position: absolute;
                    left: 0;
                    bottom: -0.4rem;
                }
            }

            .filter {
                display: flex;
                flex-direction: row;
                align-items: center;

                .btn-buscar {
                    width: 15rem;
                    font-size: 1.8rem;
                    padding: 1.8rem 3rem;
                }

                input {
                    width: 40rem;
                    padding: 2rem 3rem;
                    border-radius: 0.8rem;
                    margin-right: 2rem;
                    margin-bottom: 0;
                    color: var(--color-text-purple);
                }
            }
        }
    }
`