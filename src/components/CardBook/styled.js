import styled from 'styled-components';

export const Container = styled.div`
    .cards {
        display: grid;
        align-items: center;
        justify-content: center;

        width: 28rem;
        height: 38rem;
        margin: 4rem;
        border: 1px solid var(--color-button-red);
        background: var(--color-background-dark);
        border-radius: 0.8rem;
        transition: box-shadow 200ms ease-in-out;
        cursor: pointer;

        .container {
            img {
                width: 20rem;
                height: 20rem;
                background-position: top center;
                border-radius: 0.8rem;
            }

            .content {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h1 {
                    text-align: center;
                    color: var(--color-text-light);
                    font-size: 1.6rem;
                    max-width: 200px;
                    margin: 1rem 0;
                    font-weight: 500;
                }

                .btn-ver-mais {
                    padding: 1.2rem 2.2rem;
                    border-radius: 0.8rem;
                    background: var(--color-button-red);
                    color: var(--color-text-light);
                    transition: background border 200ms ease-in-out;

                    &:hover {
                        background: var(--color-background-dark);
                        border: 1px solid var(--color-button-red);
                    }
                }
            }
        }

        &:hover {
            animation: left 1.2s alternate .5s;
            box-shadow: 4px 8px 12px -2px rgba(235, 87, 87, 0.4);
        }

        @keyframes left {
            0% {
                transform: translateX(0)
            }

            50% {
                transform: translateX(2.5rem)
            }

            100% {
                transform: translateX(0)
            }
        }
    }

    @media (min-width: 700px) {
        .section {
            display: flex;
            flex-direction: column;
            margin: 1rem auto;
        }
    }
`