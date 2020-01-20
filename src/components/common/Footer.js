import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints } from "styles/lib";
import { footerColor } from "styles/GlobalStyles";
import { logoColor, logoText } from "../../styles/GlobalStyles";

const Container = styled.div`
  background-color: ${footerColor};
  height: 7rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: "Fredericka the Great", cursive;

  user-select: none;
  @media (max-width: ${breakpoints.medium}) {
    height: 4rem;
    position: relative;
    bottom: 0;
  }
`;

const Brand = styled(Link)`
  color: ${logoColor};
  font-size: 2rem;
  font-weight: 600;
`;

const Login = styled.div`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 0.8rem;
  color: ${logoColor};
  cursor: pointer;
  &:hover {
    color: ${colors.orange[4]};
  }
`;

const Footer = () => {
  console.log(window);
  return (
    <Container>
      <Brand to="/">{logoText}</Brand>
      <Login>Log in</Login>
    </Container>
  );
};

export default Footer;
