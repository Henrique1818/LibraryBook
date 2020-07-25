import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;

    padding: 32px;
    margin: 0 auto;
    box-sizing: border-box;

    max-width: 1400px;

    a {
        text-decoration: none;
    }

    .logo {
        color: #6C63FF;
        font-size: 36px;
        font-weight: bold;
        letter-spacing: 2px;
    }

    nav {
        display: flex;
        align-items: center;
    }

    nav a {
        font-size: 20px;
        color: #4F4F4F;
        font-weight: normal;
        margin-right: 16px;
        position: relative;
        
        &::after {
            content: "";
            width: 0;
            height: 2px;
            background: #6C63FF;
            position: absolute;
            bottom: -5px;
            left: 0;
            transition: width 250ms ease-in-out;
        }

        &:hover {
            color: #6C63FF;
        }

        &:hover::after {
            content: "";
            width: 100%;
        }
    }

    nav button {
        margin-left: 16px;
        background-color: #6C63FF;
        padding: 12px 24px;
        border-radius: 8px;
        color: #FFF;

        font-size: 18px;
        transition: background 200ms ease-in-out;

        &:hover {
            background: #4F4F4F;
            color: #FFF;
        }
    }
`