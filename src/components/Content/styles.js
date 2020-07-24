import styled from 'styled-components';

export const Container = styled.div`
    margin: 8vh auto;
    max-width: 1400px;
`

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 2vh 0;

    img {
        width: 50%;
        height: 100%;
    }

    p {
        max-width: 40%;

        font-size: 42px;
        line-height: 52px;
        color: #6C63FF;
    }
`

export const Filters = styled.section`
    max-width: 900px;
    margin: 12vh auto;

    h2 {
        text-align: center;
        margin-bottom: 24px;

        color: #6C63FF;

        font-size: 42px;
        line-height: 46px;
        letter-spacing: 2px;
        font-weight: bold;
    }

    .btn-container {

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        button {
            font-size: 20px;
            line-height: 30px;
            padding: 12px 24px;
            border-radius: 8px;

            background: #6C63FF;
            color: #FFF;
            margin: 8px;
        }
    }
`