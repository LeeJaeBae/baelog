import React, { Component } from "react";
import PostInfo from "components/Post/PostInfo";
import PostBody from "components/Post/PostBody";
import PostWrapper from "components/Post/PostWrapper";
import * as postActions from "store/modules/post";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Post extends Component {
  initialize = async () => {
    const { postActions, id } = this.props;
    try {
      await postActions.getPost(id);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.initialize();
  }
  render() {
    const { loading, post } = this.props;
    if (loading) return null;
    const { title, body, publishedDate, tags } = post.toJS();
    return (
      <PostWrapper>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
        <PostBody body={body} />
      </PostWrapper>
    );
  }
}

export default connect(
  state => ({
    post: state.post.get("post"),
    loading: state.pender.pending["post/GET_POST"]
  }),
  dispatch => ({
    postActions: bindActionCreators(postActions, dispatch)
  })
)(Post);
