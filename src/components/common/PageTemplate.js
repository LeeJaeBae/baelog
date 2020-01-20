import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { breakpoints } from "styles/lib";
import { bodyColor } from "../Post/info/node_modules/styles/GlobalStyles";

const Main = styled.main`
  background: ${bodyColor};
  min-height: calc(100vh - 12rem);
  @media (max-width: ${breakpoints.medium}) {
    min-height: calc(100vh - 9rem);
  }
`;

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageTemplate;
