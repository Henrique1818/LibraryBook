import styled from 'styled-components';


export const Container = styled.div`
    
    .filter {
        max-width: 900px;
        margin: 5rem auto;
        display: flex;
        flex-direction: column;
        margin-left: 3rem;
        margin-top: 3rem;
        margin-bottom: 2rem;

        input {
            padding: 2rem 3rem;
            border-radius: 0.8rem;
            margin-right: 2rem;
            font-size: 2rem;
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

    @media (min-width: 700px) {
        .filter {
            width: 90%;
            max-width: 900px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: left;
            margin: 4rem auto;

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
`