import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    margin: 2rem auto;

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 1rem auto;
        align-items: center;
        justify-content: center;
    }

    .cards {
        width: 28rem;
        height: 38rem;
        padding: 1rem;
        border: 1px solid var(--color-button-red);
        background: var(--color-background-dark);
        border-radius: 0.8rem;
        transition: box-shadow 200ms ease-in-out;
        cursor: pointer;

        .container {
            img {
                background-position: top center;
                border-radius: 0.4rem;
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
        
    }
`