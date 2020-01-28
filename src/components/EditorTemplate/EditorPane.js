import React from "react";
import styled from "styled-components";

import { colors } from "styles/lib";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
  background: ${colors.gray[6]};
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1rem;
  color: white;
  font-weight: 500;
  font-family: "Nanum Myeongjo", sans-serif;
  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const Editor = styled.div`
  flex: 1;
  background: ${colors.gray[9]};
`;

const Tags = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  background: ${colors.gray[7]};
  display: flex;
  align-items: center;
  .discription {
    font-size: 0.85rem;
    color: white;
    font-weight: 600;
    margin-right: 1rem;
  }
`;

const InputTags = styled.input`
  font-size: 0.85rem;
  border: none;
  flex: 1;
  background: none;
  outline: none;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default class EditorPane extends React.Component {
  render() {
    return (
      <Container>
        <Title placeholder="Title" name="title" />
        <Editor placeholder="sdfadsfsdafsad" name="editor" />
        <Tags>
          <div className="discription">Tags</div>
          <InputTags placeholder="Input tags..." name="tags" />
        </Tags>
      </Container>
    );
  }
}
