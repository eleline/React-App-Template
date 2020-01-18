import React from "react";
import Header from "./Header";
import { StylesProvider } from "@material-ui/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import styled from "styled-components";

const backgroundColor = blueGrey[50];

const AppArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundColor};
`;

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <AppArea>
        <Header />
      </AppArea>
    </StylesProvider>
  );
};

export default App;
