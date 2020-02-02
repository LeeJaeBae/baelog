import React from "react";
import styled from "styled-components";
import { colors } from "styles/lib";

import MarkdownRender from "components/common/MarkdownRender";

const Container = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  border-bottom: 1px solid ${colors.gray[4]};
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const TextBox = styled.div``;

const PreviewPane = ({ markdown, title }) => {
  return (
    <Container>
      <Title className="title">{title}</Title>
      <TextBox>
        <MarkdownRender markdown={markdown} />
      </TextBox>
    </Container>
  );
};

export default PreviewPane;
