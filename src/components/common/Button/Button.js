import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { colors } from "styles/lib";

const Container = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  display: inline-flex;

  /* default */
  &.default {
    background: ${colors.yellow[7]};
    &:hover {
      background: ${colors.yellow[5]};
    }
    &:active {
      background: ${colors.yellow[7]};
    }
  }
  /* gray */
  &.gray {
    background: ${colors.gray[7]};
    &:hover {
      background: ${colors.gray[5]};
    }
    &:active {
      background: ${colors.gray[7]};
    }
  }
  /* white outline */
  ${props =>
    props.theme === "outline"
      ? ` {
    border: 2px solid white;
    border-radius: 2px;
    &:hover {
      background: ${colors.gray[7]};
      color: ${colors.yellow[7]};
    }
    &:active {
      background: ${colors.gray[10]};
      border: 2px solid ${colors.gray[10]};
    }
  }`
      : ``}

  &:hover {
    opacity: 0.7;
  }

  /* disabled */
  &.disabled {
    background: ${colors.gray[4]};
    color: ${colors.gray[6]};
    cursor: default;
    &:hover,
    &:active {
      box-shadow: none;
      background: ${colors.gray[4]};
    }
  }

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
console.log(Button);
export default Button;
