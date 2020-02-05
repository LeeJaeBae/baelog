import React from "react";
import styled from "styled-components";

import MarkdownRender from "components/common/MarkdownRender";

const Body = styled.div``;

const Paper = styled.div`
  padding: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background: whitesmoke;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.11), 0 10px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  min-height: 29rem;
  width: 1024px;
  @media (min-width: 1024px) {
    transform: translate(-1rem, -7rem);
  }
  @media (max-width: 1024px) {
    transform: translate(-0.2rem, -7rem);

    width: 768px;
  }
  @media (max-width: 768px) {
    width: calc(100% - 0.3rem);
    transform: translate(0rem, -9rem);
  }
`;

const PostBody = ({ body }) => {
  return (
    <Body>
      <Paper>
        <MarkdownRender markdown={body} />
      </Paper>
    </Body>
  );
};

export default PostBody;
