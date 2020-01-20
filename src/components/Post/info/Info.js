import React from "./node_modules/react";
import styled from "./node_modules/styled-components";
import { headColor } from "./node_modules/styles/GlobalStyles";

const PostInfo = styled.div`
  background-color: ${headColor};
  user-select: none;
  height: 24rem;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
  width: 1024px;
  padding: 1rem;
`;
const Title = styled.div`
  font-weight: 300;
  font-size: 3rem;
  margin: 0;
  word-wrap: break-word;
`;
const Tag = styled.a`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
  & + & {
    margin-left: 0.25rem;
  }
`;
const Date = styled.div`
  text-align: right;
  opacity: 0.75;
  font-style: italic;
  font-size: 1.25rem;
`;

const Info = () => (
  <PostInfo>
    <Title>Title</Title>
    <Tag>Tag</Tag>
    <Tag>Tag</Tag>
    <Tag>Tag</Tag>
    <Date>mm-dd-yyyy</Date>
  </PostInfo>
);

export default Info;
