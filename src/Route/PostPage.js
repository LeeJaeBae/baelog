import React from "react";
import Post from "containers/post/Post";

const PostPage = ({ match }) => {
  const { id } = match.params;
  return <Post id={id} />;
};

export default PostPage;
