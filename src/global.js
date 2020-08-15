import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    :root {
        --color-text-subtitle: #D1D1D1;
        --color-background-dark: #4F4F4F;
        --color-text-title: #6C63FF;
        --color-background-light: #FFF;

        font-size: 60%;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: var(--color-background-dark);
    }

    body,
    input,
    button,
    textarea {
        font: 14px 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    .container {
        width: 90%;
        max-width: 700px;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`