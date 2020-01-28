import React from "react";
import styled from "styled-components";

import EditorHeader from "./EditorHeader";
import EditorPane from "./EditorPane";
import PreviewPane from "./PreviewPane";

import { breakpoints } from "styles/lib";

const Container = styled.div`
  @media (max-width: ${breakpoints.medium}) {
    .editor {
      flex: 1 !important;
    }
    .preview,
    .separator {
      display: none;
    }
  }
`;

const Panes = styled.div`
  height: calc(100vh - 7rem);
  display: flex;
  background: gray;
`;

const Pane = styled.div`
  display: flex;
  min-width: 0;
  overflow: auto;
  :first-child {
    flex: ${props => props.left};
  }
  :last-child {
    flex: calc(1 - ${props => props.left});
  }
`;

const Separator = styled.div`
  width: 1rem;
  height: calc(100vh - 7rem);
  position: absolute;
  transform: translate(-50%);
  cursor: col-resize;
  /* background: black; */
  left: calc(${props => props.left} * 100%);
`;

class EditorTemplate extends React.Component {
  state = {
    leftPrecerntage: 0.5
  };
  handleMouseMove = e => {
    this.setState({
      leftPrecerntage: e.clientX / window.innerWidth
    });
  };
  handleMouseUp = e => {
    document.body.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  };
  handleSeparatorMouseDown = e => {
    document.body.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  render() {
    const { leftPrecerntage } = this.state;
    const { handleSeparatorMouseDown } = this;

    return (
      <Container>
        <EditorHeader />
        <Panes>
          <Pane left={leftPrecerntage} className="editor">
            <EditorPane />
          </Pane>
          <Pane left={leftPrecerntage} className="preview">
            <PreviewPane />
          </Pane>
          <Separator
            left={leftPrecerntage}
            onMouseDown={handleSeparatorMouseDown}
            className="separator"
          />
        </Panes>
      </Container>
    );
  }
}

export default EditorTemplate;
