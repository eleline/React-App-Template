import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import { StylesProvider } from "@material-ui/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import styled from "styled-components";

const backgroundColor = blueGrey[50];

const AppArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundColor};
`;
const Main = styled.main`
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <AppArea>
        <Header />
        <Main>
          <Counter />
        </Main>
      </AppArea>
    </StylesProvider>
  );
};

export default App;
