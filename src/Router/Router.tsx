import { Switch, Route } from "react-router-dom";
import { VFC } from "react";
import { Page404 } from "../components/pages/Page404";
import { Header } from "../components/organisms/Header";
import { Home } from "../components/pages/Home";
import { Page } from "../components/pages/Page";
import { List } from "../components/pages/List";
import styled from "styled-components";

export const Router: VFC = () => {
  return (
    <>
      <Header />
      <SContainer>
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/page">
            <Page />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </SContainer>
    </>
  );
};
const SContainer = styled.div`
  width: 1080px;
  max-width: 100%;
  margin: 60px auto 0;
`;
