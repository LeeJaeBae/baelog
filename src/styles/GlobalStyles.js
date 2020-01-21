import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./lib/open-color";
import "../../node_modules/open-color/open-color.css";

export const headColor = colors.gray[3];
export const bodyColor = colors.gray[2];
export const footerColor = colors.gray[6];
export const logoColor = colors.gray[9];
export const textColor = {
  default: colors.gray[7],
  hover: colors.gray[6],
  title: colors.gray[8]
};
export const logoText = "DAILY DAIRY"; // 수정가능한 사항이니 리덕스에 올려야할듯

const globalStyles = createGlobalStyle`
    ${reset};

    @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");
    /* font-family: 'Fredericka the Great', cursive; en*/
    /* font-family: 'Open Sans Condensed', sans-serif; en*/
    /* font-family: 'Nanum Gothic', sans-serif; ko */
    /* font-family: 'Nanum Myeongjo', serif; ko*/
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
        font-family: 'Nanum Myeongjo', sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${colors.black};
        background-color: ${bodyColor};
    }
`;

export default globalStyles;
