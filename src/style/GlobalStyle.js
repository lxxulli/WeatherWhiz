import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "1b1b1b",
};

export const GlobalStyle = createGlobalStyle`
 ${reset}

 *{
    box-sizing: border-box;
 }

 body{
    font-family: 'Noto Sans KR', sans-serif;
    color: ${mainColors.blackColor};
    letter-spacing: -1px;
 }

 ul, li{
    list-style: none;
 }

 a{
   text-decoration: none;
   color: ${mainColors.blackColor};
 }
`;
