import React from "react";
import PageTemplate from "components/common/PageTemplate";
import { ListWrapper, PostList, Pagination } from "../components/list";

const ListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <PostList />
        <Pagination />
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;
