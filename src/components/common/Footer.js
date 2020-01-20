import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints } from "styles/lib";

const Container = styled.div`
  background-color: ${colors.gray[7]};
  height: 7rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  user-select: none;
  @media (max-width: ${breakpoints.medium}) {
    height: 4rem;
    position: relative;
    bottom: 0;
  }
`;

const Brand = styled(Link)`
  color: ${colors.yellow[7]};
  font-size: 2rem;
  font-weight: 600;
`;

const Login = styled.div`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 0.8rem;
  color: ${colors.yellow[4]};
  cursor: pointer;
  &:hover {
    color: ${colors.yellow[2]};
  }
`;

const Footer = () => {
  console.log(window);
  return (
    <Container>
      <Brand to="/">BAELOG</Brand>
      <Login>Log in</Login>
    </Container>
  );
};

export default Footer;
