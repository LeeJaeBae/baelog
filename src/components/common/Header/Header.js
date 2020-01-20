import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors, breakpoints } from "styles/lib";

import Button from "../Button/Button";

const Head = styled.header`
  background-color: ${colors.gray[10]};
  user-select: none;
`;

const Content = styled(Head)`
  height: 5rem;
  width: 1400px;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  color: ${colors.yellow[7]};
  @media (min-width: ${breakpoints.small}) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: auto;
  }
  @media (min-width: ${breakpoints.medium}) {
    width: 100%;
  }
  @media (min-width: ${breakpoints.wide}) {
  }
`;

const Brand = styled.div`
  position: relative;
  top: calc(50% - 0.75rem);
  font-size: 1.5rem;
  font-weight: 600;
`;

const Right = styled.div`
  position: relative;
  top: calc(50% - 0.75rem);
  right: 0;
  margin-left: auto;
  @media (max-width: 400px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <>
      <Head>
        <Content as="div">
          <Brand>
            <Link to="/">BAELOG</Link>
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
