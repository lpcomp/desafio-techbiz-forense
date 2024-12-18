import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --title-color: #454749;
        --subtitle-color: #5d5d5e;
        --background-card-color: #fbfbfb;
        --line-color: #d1d1d1;
        margin: 0 auto;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f1f1f1;        
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    .title-descriptions {
        .ant-descriptions-title {
            color: var(--title-color);
        }
    }

    .full-width {
        width: 100%;
    }

    .remove-style-list {
        li {
            list-style-type: none;
        }
    }

    .whatsapp-icon {
        color: #09b262;
        font-size: 14px;
        margin-right: 4px;
    }
`;

export default GlobalStyles;
