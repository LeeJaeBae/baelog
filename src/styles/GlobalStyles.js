import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./lib/open-color";
import "../../node_modules/open-color/open-color.css";

const globalStyles = createGlobalStyle`
    ${reset};

    @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");
    @import url('https://cdn.jsdelivr.net/gh/velopert/font-d2coding@1.2.1/d2coding.css');

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: inherit;
    }
    body{
        margin: 0;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: rgba(20,20,20,1);
        color: ${colors.blue[1]};
    }
`;

export default globalStyles;
