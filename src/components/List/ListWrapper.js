import React from "react";
import styled from "styled-components";

import { breakpoints } from "styles/lib";

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
