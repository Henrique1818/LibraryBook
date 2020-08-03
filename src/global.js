import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: #fff;
        font: 14px 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    img {
        max-width: 100%;
    }
`