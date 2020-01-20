import React from "./node_modules/react";
import styled from "./node_modules/styled-components";

import { breakpoints } from "./node_modules/styles/lib";

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: ${breakpoints.wide}) {
    width: 768px;
  }
  @media (max-width: ${breakpoints.large}) {
    width: 512px;
  }
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

const ListWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ListWrapper;
