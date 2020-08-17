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
        height: 28rem;
        padding: 2rem;
        border: 1px solid var(--color-button-red);
        background: var(--color-background-dark);
        border-radius: 0.8rem;
        transition: box-shadow 200ms ease-in-out;
        cursor: pointer;

        .content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &:hover {
            animation: left 1.2s alternate .5s infinite;
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