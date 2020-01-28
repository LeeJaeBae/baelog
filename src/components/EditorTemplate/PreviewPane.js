import React from "react";
import styled from "styled-components";
import { colors } from "styles/lib";

const Container = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  font-size: 1.125rem;
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
      <Title className="title">Title</Title>
      <TextBox>Test</TextBox>
    </Container>
  );
};

export default PreviewPane;
