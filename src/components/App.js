import React from "react";
import { Switch, Route } from "react-router-dom";
import { ListPage, EditorPage, NotFoundPage, PostPage } from "pages";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/page/:page" component={ListPage} />
        <Route path="/tag/:tag/:page" component={ListPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/editor" component={EditorPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
