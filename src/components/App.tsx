import React, { FC } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import SearchBox from './SearchBox'
import SearchResults from "./SearchResults";
import Favourites from "./Favourites";
const Container = styled.div({
  margin: "0 auto",
  height: "100%",
  width: "560px",
  paddingTop: "60px",
  position:'relative',
  // backgroundColor:'red'
});
const App: FC = () => {
  return (
    <Container>
      <Header title={'Dog Breed'}/>
      <SearchBox />
      <SearchResults/>
      <Favourites/>
    </Container>
  );
};

export default App;
