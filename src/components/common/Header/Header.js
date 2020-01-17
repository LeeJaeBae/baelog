import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors, mixins, breakpoints } from "../../../styles/lib";

const Head = styled.header`
  background-color: ${colors.blue[6]};
`;
const Content = styled(Head)`
  height: 5rem;
  width: 1400px;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  margin: 0 auto;
  align-content: center;
  @media (min-width: ${breakpoints.wide}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;
const Brand = styled.div`
  position: relative;
  top: calc(50% - 0.75rem);
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;
const Right = styled.div`
  position: relative;
  top: calc(50% - 0.5rem);
  right: 0;
  margin-left: auto;
`;

const Header = () => {
  return (
    <>
      <Head>
        <Content as="div">
          <Brand>
            <Link to="/">BAELOG</Link>
          </Brand>
          <Right>RIGHT</Right>
        </Content>
      </Head>
    </>
  );
};

export default Header;
