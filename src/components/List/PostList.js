import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { textColor } from "styles/GlobalStyles";
import { colors } from "styles/lib";

const List = styled.div``;

const Item = styled.div`
  padding: 1.5rem;
  transition: all 0.15s ease-in;

  & + & {
    border-top: 1px solid ${colors.gray[3]};
  }
  * {
    margin-bottom: 0.5rem;
  }
`;
const Title = styled(Link)`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 5rem;
  margin: 0;
  color: ${textColor.title};
  &:hover {
    color: ${textColor.hover};
  }
`;
const Date = styled.div`
  margin-top: 0rem;
  font-size: 0.8rem;
  color: ${colors.gray[6]};
`;
const Text = styled.p`
  color: ${textColor.default};
  font-weight: 300;
  font-size: 1rem;
`;
const Tag = styled.a`
  font-size: 0.8rem;
  color: ${colors.blue[6]};
  &:hover {
    color: ${colors.blue[5]};
    text-decoration: underline;
    cursor: pointer;
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostItem = () => {
  return (
    <Item>
      <Title to="/post/123">Title</Title>
      <Date>mm-dd-yyyy</Date>
      <Text>내요오오오옹</Text>
      <Tag>#Tag</Tag>
      <Tag>#Tag</Tag>
      <Tag>#Tag</Tag>
    </Item>
  );
};

const PostList = () => (
  <List>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </List>
);

export default PostList;
