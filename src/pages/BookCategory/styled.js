import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    #title {
        min-width: 300px;
        width: 90%;
        text-align: center;
        font-size: 2rem;
        line-height: 2.5rem;
        margin: 4rem auto 1rem;
        color: var(--color-text-light);

        span {
            margin-left: 1rem;
            color: var(--color-text-purple);
            text-transform: uppercase;
        }
    }

    .cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 700px) {

        #title {
            max-width: 900px;
            display: flex;
            align-items: center;
            justify-content: left;
            font-size: 2.5rem;
            line-height: 3.5rem;
            margin: 2rem auto;
            color: var(--color-text-light);

            span {
                margin-left: 2rem;
                color: var(--color-text-purple);
                text-transform: uppercase;
            }
        }
        .cards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
`