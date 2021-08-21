import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { MainPage } from "./MainPage";
import { PageNotFound } from "./PageNotFound";

export const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
