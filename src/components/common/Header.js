import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors, breakpoints } from "styles/lib";
import { headColor } from "styles/GlobalStyles";

import Button from "./Button";
import { logoText } from "../../styles/GlobalStyles";

const Head = styled.header`
  background-color: ${headColor};
  user-select: none;
  @media (max-width: ${breakpoints.medium}) {
    padding-top: 0;
  }
`;

const Content = styled(Head)`
  height: 5rem;
  width: 1400px;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  color: ${colors.gray[8]};
  @media (max-width: ${breakpoints.small}) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: auto;
  }
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
    height: 8rem;
    display: block;
    text-align: center;
  }
  @media (max-width: ${breakpoints.wide}) {
    width: auto;
  }
`;

const Brand = styled.div`
  position: relative;
  top: calc(50% - 1.5rem);
  font-family: "Fredericka the Great", "Nanum Gothic", cursive;
  /* font-family: 'Nanum Gothic', sans-serif; */
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: ${breakpoints.medium}) {
    font-size: 2rem;
  }
`;

const Right = styled.div`
  position: relative;
  top: calc(50% - 0.75rem);
  margin-left: auto;
  @media (max-width: ${breakpoints.medium}) {
    margin-left: 0;
  }
`;

const Header = () => {
  return (
    <>
      <Head>
        <Content>
          <Brand>
            <Link to="/">{logoText}</Link>
          </Brand>
          <Right>
            <Button theme="outline" to="/editor">
              New Post
            </Button>
            <Button theme="disabled" disabled={true}>
              test
            </Button>
            <Button theme="default">test2</Button>
            <Button theme="gray">test3</Button>
          </Right>
        </Content>
      </Head>
    </>
  );
};

export default Header;
