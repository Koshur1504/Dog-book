import React, { FC } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
const Container = styled.div({
  margin: "0 auto",
  height: "100%",
  width: "560px",
  paddingTop: "60px"
});
const App: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
