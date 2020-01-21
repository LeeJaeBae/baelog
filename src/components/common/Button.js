import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { colors, mixins } from "styles/lib";

const Container = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: gray;
  cursor: pointer;
  display: inline-flex;

  /* default */
   ${props =>
     props.theme === "default"
       ? `{
    background: ${colors.black};
    color: ${colors.gray[0]};
    &:hover {
      background: ${colors.orange[4]};
      color: black;
    }
    &:active {
      background: ${colors.yellow[7]};
    }
  }`
       : ``}

  /* gray */
  ${props =>
    props.theme === "gray"
      ? `{
    background: ${colors.gray[7]};
    color: ${colors.gray[0]};
    &:hover {
      background: ${colors.gray[5]};
    }
    &:active {
      background: ${colors.gray[7]};
    }
  }`
      : ``}
  /* white outline */
  ${props =>
    props.theme === "outline"
      ? ` {
    border: 2px solid gray;
    border-radius: 2px;
    &:hover {
      background: ${colors.gray[7]};
      color: ${colors.yellow[7]};
      border: 2px solid black;
    }
    &:active {
      background: ${colors.gray[10]};
      border: 2px solid black;
    }
  }`
      : ``}

  &:hover {
    ${mixins(2, 0.5)}
  }

  /* disabled */
   ${props =>
     props.theme === "disabled"
       ? `{
    background: ${colors.gray[4]};
    color: ${colors.gray[6]};
    cursor: default;
    &:hover,
    &:active {
      box-shadow: none;
      background: ${colors.gray[4]};
    }
  }`
       : ``}

  & + & {
    margin-left: 0.5rem;
  }
`;

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, onClick, disabled, theme = "default" }) => {
  const Element = to && !disabled ? Link : Div;
  return (
    <Container theme={theme}>
      <Element to={to} onClick={disabled ? () => null : onClick}>
        {children}
      </Element>
    </Container>
  );
};

Button.propTypes = {
  theme: PropTypes.string
};

export default Button;
