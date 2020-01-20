import React from "./node_modules/react";
import styled from "./node_modules/styled-components";

import Button from "./node_modules/components/common/Button";
import { colors } from "./node_modules/styles/lib";

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
const Number = styled.div`
  font-size: 0.85rem;
  text-align: center;
  color: ${colors.gray[6]};
  flex: 1;
`;

const Pagination = () => {
  return (
    <Container>
      <Button theme="disabled">Before</Button>
      <Number>Page 1</Number>
      <Button>Next</Button>
    </Container>
  );
};

export default Pagination;
