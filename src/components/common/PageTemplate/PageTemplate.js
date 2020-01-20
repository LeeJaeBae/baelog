import React from "react";
import styled from "styled-components";

import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import { colors } from "styles/lib";

const Main = styled.main`
  background: ${colors.gray[9]};
  min-height: calc(100vh - 15rem);
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
