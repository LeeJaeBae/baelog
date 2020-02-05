import React, { Component } from "react";
import EditorHeader from "./EditorHeader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as editorActions from "store/modules/editor";

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions } = this.props;
    EditorActions.initialize();
    console.log(this.props);
  }
  handleGoBack = () => {
    const { history, EditorActions } = this.props;
    EditorActions.initialize();
    history.goBack();
  };
  handleSubmit = async () => {
    const { title, markdown, tags, EditorActions, history } = this.props;
    const post = {
      title,
      body: markdown,
      tags:
        tags === "" ? [] : [...new Set(tags.split(",").map(tag => tag.trim()))]
    };
    try {
      await EditorActions.writePost(post);
      history.push(`/post/${this.props.postId}`);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { handleGoBack, handleSubmit } = this;
    return <EditorHeader onGoBack={handleGoBack} onSubmit={handleSubmit} />;
  }
}

export default connect(
  state => ({
    title: state.editor.get("title"),
    markdown: state.editor.get("markdown"),
    tags: state.editor.get("tags"),
    postId: state.editor.get("postId")
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));
