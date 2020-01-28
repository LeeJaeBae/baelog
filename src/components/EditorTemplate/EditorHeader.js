import React from "react";
import styled from "styled-components";
import Button from "components/common/Button";
import { headColor } from "styles/GlobalStyles";

const Container = styled.div`
  background: ${headColor};
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;

const Back = styled.div``;

const Submit = styled.div`
  margin-left: auto;
`;

const EditorHeader = ({ onGoBack, onSubmit }) => {
  return (
    <Container>
      <Back>
        <Button onClick={onGoBack} theme="gray">
          Back
        </Button>
      </Back>
      <Submit>
        <Button onClick={onSubmit} theme="default">
          Post
        </Button>
      </Submit>
    </Container>
  );
};

export default EditorHeader;
