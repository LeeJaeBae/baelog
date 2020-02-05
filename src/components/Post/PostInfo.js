import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import moment from "moment";

import { headColor } from "styles/GlobalStyles";
import { breakpoints } from "styles/lib";

const Wrapper = styled.div``;

const Info = styled.div`
  background-color: ${headColor};
  min-height: 15rem;
  align-items: center;
  justify-content: center;
  margin-top: -3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 3rem;
  margin: 0 0 1rem 0;
  word-wrap: break-word;
  padding-top: 0.5rem;
  @media (max-width: ${breakpoints.medium}) {
    font-size: 2rem;
  }
`;

const Tag = styled.a`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 100;
  &:hover {
    text-decoration: underline;
  }
  & + & {
    margin-left: 0.5rem;
  }
  @media (max-width: ${breakpoints.medium}) {
    font-size: 0.8rem;
  }
`;

const Date = styled.div`
  text-align: right;
  opacity: 0.75;
  font-style: italic;
  font-size: 1.25rem;
  @media (max-width: ${breakpoints.medium}) {
    font-size: 0.8rem;
  }
`;

const PostInfo = ({ publishedDate, title, tags }) => (
  <Info>
    <Wrapper>
      <Title>{title}</Title>
      <>
        {tags &&
          tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`}>
              <Tag>#{tag}</Tag>
            </Link>
          ))}
      </>
      <Date>{moment(publishedDate).format("ll")}</Date>
    </Wrapper>
  </Info>
);

export default PostInfo;
