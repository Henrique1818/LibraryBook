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
        }
    }
`