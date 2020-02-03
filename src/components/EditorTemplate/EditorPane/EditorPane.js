import React from "react";
import styled from "styled-components";

import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

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
  display: flex;
  flex-direction: column;
  .CodeMirror {
    flex: 1;
    font-size: 1rem;
    /* font-family: "Nanum Gothic", sans-serif; */
    font-family: "D2 Coding";
  }
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
  editor = null;
  codeMirror = null;
  cursor = null;

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "markdown",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true
    });
    this.codeMirror.on("change", this.handleChangeMarkdown);
  };

  handleChange = e => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({ name, value });
  };
  handleChangeMarkdown = doc => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor();
    onChangeInput({
      name: "markdown",
      value: doc.getValue()
    });
  };

  componentDidMount() {
    this.initializeEditor();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if (!codeMirror) return;
      codeMirror.setValue(this.props.markdown);
      if (!cursor) return;
      codeMirror.setCursor(cursor);
    }
  }
  render() {
    const { tags, title } = this.props;
    const { handleChange } = this;
    return (
      <Container>
        <Title
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <Editor name="markdown" ref={ref => (this.editor = ref)} />
        <Tags>
          <div className="discription">Tags</div>
          <InputTags
            placeholder="Input tags..."
            name="tags"
            value={tags}
            onChange={handleChange}
          />
        </Tags>
      </Container>
    );
  }
}
