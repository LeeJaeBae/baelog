import React, { Component } from "react";
import styled from "styled-components";

import marked from "marked";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-css.min.js";

import { colors } from "styles/lib";

const Markdown = styled.div`
  p {
    font-size: 1rem;
  }
  blockquote {
    border-left: 4px solid gray;
    padding: 1rem;
    background: ${colors.gray[3]};
    margin-left: 0;
    margin-right: 0;
    p {
      margin: 0;
    }
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 550;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    code {
      font-family: "D2 Coding";
      background: ${colors.gray[0]};
      padding: 0.25rem;
      color: ${colors.yellow[7]};
      border: 1px solid ${colors.gray[2]};
      border-radius: 2px;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: "D2 Coding";
  }
  a {
    color: ${colors.yellow[9]};
    &:hover {
      color: ${colors.yellow[7]};
      text-decoration: underline;
    }
  }
  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

class MarkdownRender extends Component {
  state = {
    html: ""
  };

  renderMarkdown = () => {
    const { markdown } = this.props;

    if (!markdown) {
      this.setState({ html: "" });
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true,
        sanitize: true
      })
    });
  };

  constructor(props) {
    super(props);
    const { markdown } = props;

    this.state = {
      html: markdown ? marked(markdown, { breaks: true, sanitize: true }) : ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }
    if (prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  render() {
    const { html } = this.state;
    const markup = {
      __html: html
    };
    return (
      <Markdown className="markdown-render" dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;
