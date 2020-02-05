import React from "react";
import styled from "styled-components";

import { breakpoints } from "styles/lib";

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: ${breakpoints.wide}) {
    width: 1024px;
  }
  @media (max-width: ${breakpoints.large}) {
    width: 790px;
  }
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

const PostWrapper = () => {
  return <Wrapper />;
};

export default PostWrapper;
