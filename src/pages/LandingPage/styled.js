import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    min-width: 300px;
    
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;
    overflow: hidden;

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            text-align: center;
            .title {
                color: var(--color-text-purple);
                font-size: 6.8rem;
                line-height: 7.8rem;
                letter-spacing: 2px;
                margin: 0 auto 2rem;
            }

            .subtitle {
                color: var(--color-text-gray);
                font-size: 2rem;
                line-height: 3rem;
                text-align: center;
                max-width: 280px;
            }
        }
    }

    .image-landing-page {
        width: 80%;
        margin: 3.2rem auto;
    }

    .buttons {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        margin: 4rem auto 1rem;

        .btn-config {
            margin: 1.2rem;
            padding: 2.4rem 3.8rem;
            border-radius: 0.5rem;

            font-size: 2rem;
            color: var(--color-text-light);
            cursor: pointer;

            &:hover {
                animation: up 1s alternate .5s;
            }
        }

        .add-button {
            background: var(--color-button-red);

            &:hover {
                box-shadow: 2px 4px 5px -2px rgba(235, 87, 87, 0.5);
            }
        }

        .recente-button {
            background: var(--color-text-purple);

            &:hover {
                box-shadow: 2px 4px 5px -2px rgba(108, 99, 255, 0.5);
            }
        }

        @keyframes up {
            0% {
                transform: translateY(0px);
            }

            50% {
                transform: translateY(-15px);
            }

            100% {
                transform: translateY(0);
            }
        }
    }

    @media(min-width: 700px) {
        header {
            margin-top: 2rem;
        }

        .header {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;

            div {
                text-align: left;

                .title {
                    font-size: 8rem;
                }

                .subtitle {
                    font-size: 1.5rem;
                    line-height: 2rem;
                }
            }

            .image-landing-page {
                width: 45%;
                margin: 0;
            }
        }

        .buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 2rem;
        }

    }
`