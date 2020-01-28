import React from "react";
import styled from "styled-components";

import { breakpoints } from "styles/lib";

const Main = styled.main`
  min-height: calc(100vh - 5rem);
  @media (max-width: ${breakpoints.medium}) {
    min-height: calc(100vh - 9rem);
  }
`;

const PageTemplate = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default PageTemplate;
