import styled from 'styled-components';

export const LibraryHeader = styled.header`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 4rem;
        padding: 3rem 1rem;
    }

    .arrow_back {
        color: var(--color-text-purple);
        font-size: 2.5rem;
        line-height: 3rem;
        transition: color 200ms ease-in-out;

        &:hover {
            color: var(--color-text-light);
            animation: left 1s alternate .5s infinite;
        }

        @keyframes left {
            0% {
                transform: translateX(0);
            }

            50% {
                transform: translateX(-1rem);
            }

            100% {
                transform: translateX(0);
            }
        }
    }

    h2 {
        color: var(--color-text-purple);
        font-size: 2rem;
        line-height: 3rem;
        letter-spacing: 2px;
    }

    @media (min-width: 700px) {
        .header {
            max-width: 900px;
            width: 90%;
            margin: 0 auto;

            .arrow_back {
                font-size: 3rem;
                line-height: 4rem;
            }

            h2 {
                font-size: 3rem;
                line-height: 4rem;
            }
        }
    }
`