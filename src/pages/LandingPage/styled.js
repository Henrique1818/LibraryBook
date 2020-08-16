import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    max-width: 700px;

    display: grid;
    align-items: center;
    justify-content: center;
    margin: 5.2rem auto;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;

        .title {
            color: var(--color-text-purple);
            font-size: 6.8rem;
            line-height: 7.8rem;
            letter-spacing: 2px;
            margin-bottom: 2rem;
        }

        .subtitle {
            color: var(--color-text-gray);
            font-size: 2rem;
            line-height: 3rem;
            text-align: center;
            max-width: 280px;
        }
    }

    .image-landing-page {
        width: 90%;
        margin: 3.2rem auto;
    }

    .buttons {
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
`