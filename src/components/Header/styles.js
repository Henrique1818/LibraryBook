import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;

    padding: 18px 0;
    margin: 0 auto;
    box-sizing: border-box;

    max-width: 1200px;

    a {
        text-decoration: none;
    }

    .logo {
        color: #6C63FF;
        font-size: 36px;
        font-weight: bold;
        letter-spacing: 2px;
    }

    nav ul {
        display: flex;
        align-items: center;
    }

    nav ul a {
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

    nav ul button {
        margin-left: 16px;
        background: #6C63FF;
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

    @media (max-width: 672px) {
        nav {
            display: none;
        }

        .one,
        .two,
        .three {
            width: 25px;
            height: 2px;
            background: #6C63FF;
            margin: 5px auto;
            cursor: pointer;

            transition-duration: 0.3s;
        }

        .menu .three:last-child {
            margin-bottom: 0;
        }
        
        .menu {
            display: flex;
            justify-content: flex-end;
            width: 80%;
        }

        .menu-toggle {
            width: 40px;
            height: 30px;
            margin-right: 20px;
        }

        /* fullscreen */
        .menu.on {
            position: absolute;
            top:0;
            left:0;
            
            width: 100vw;
            height: 100vh;

            background-color: #4F4F4F;
            
            z-index: 1;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu.on nav {
            display: block;
            height: 50%;
        }

        .menu.on .menu-toggle {
            position: absolute;
            right: 18px;
            top: 20px;
        }

        .menu.on .menu-toggle .one {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .menu.on .menu-toggle .two {
            opacity: 0;
        }

        .menu.on .menu-toggle .three {
            transform: rotate(-45deg) translate(2px,-4px);
        }

        .menu.on nav ul {
            text-align: center;
            display: block;
        }

        .menu.on nav ul a{
            transition-duration: 0.5s;
            font-size: 1.5rem;
            line-height: 2rem;
            display: block;
            color: #FFF;
            margin: 18px 0;
        }

        .menu.on nav ul button {
            margin-top: 12px;

            &:hover {
                background: #FFF;
                color: #6C63FF;
                transition: background 200ms ease;
            }
        }
    }
`