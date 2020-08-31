import styled from 'styled-components';

export const Container = styled.section`
    margin-bottom: 2rem;

    .btn-save {
        display: flex;
        align-items: center;
        width: 12rem;

        margin-top: 2.4rem;
        margin-left: 2rem;
        padding: 1.8rem 2.8rem;
        border-radius: 0.8rem;
        background: var(--color-button-red);
        color: var(--color-text-light);

        font-size: 1.8rem;
        font-weight: bold;
        transition: background 200ms ease-in 0.2ms;

        &:hover {
            background: var(--color-background-dark);
            color: var(--color-button-red);
            border: 1px solid var(--color-button-red);
        }
    }

    @media (min-width: 700px) {
        .btn-save {
            margin: 2.5rem auto 0;
            width: 50%;
            justify-content: center;
            font-size: 2rem;
        }

        section {
            max-width: 1200px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin: 2rem auto;
        }
    }
`

export const Input = styled.section`
    max-width: 900px;
    width: 100%;

    display: flex;
    flex-direction: column;

    .image-container img {
        display: flex;
        width: 25rem;
        margin: 2rem auto 4rem;
    }
    
    .form-container {
        width: 95%;
    }
    .content {
        margin-left: 2rem;
        margin-bottom: 1.8rem;

        &:last-child {
            margin-bottom: 0;
        }

        h2 {
            font-size: 2.2rem;
            color: var(--color-text-light);
            margin-bottom: 1.8rem;
            position: relative;

            &::after {
                content: "";
                width: 8rem;
                height: 0.2rem;
                background: var(--color-text-purple);
                position: absolute;
                left: 0;
                bottom: -0.2rem;
            }
        }

        input, textarea {
            width: 100%;
            padding: 1.2rem 1rem;
            border-radius: 0.8rem;

            font-size: 1.5rem;
            color: var(--color-text-purple);

            &:focus {
                border-bottom: 2px solid var(--color-button-red);
                transition: width 200ms ease-in-out;
            }
        }
    }

    @media (min-width: 700px) {
        .image-container img {
            width: 50rem;
            margin: 0;
        }

        .form-container {
            width: 100%;
        }
    }
`