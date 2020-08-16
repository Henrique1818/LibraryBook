import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    
    :root {
        --color-background-dark: #4F4F4F;
        --color-background-light: #F1F1F1;
        --color-text-purple: #6C63FF;
        --color-text-gray: #D1D1D1;
        --color-button-red: #EB5757;
        --color-text-light: #FFF;

        font-size: 60%;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, :root {
        height: 100%;
    }

    body {
        background: var(--color-background-dark);

        ::-webkit-scrollbar-track {
            background-color: var(--color-background-dark);
        }
        ::-webkit-scrollbar {
            width: 0.8rem;
            background: none;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--color-text-purple);
            border-radius: 3rem;
        }
    }

    body,
    input,
    button,
    textarea {
        font: 14px 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`