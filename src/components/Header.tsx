import React, { FC } from "react";
import styled from "@emotion/styled";
import Heart from "./Heart";

interface Props {
  title: string;
  margin?: string;
}

const Container = styled.div<{ margin?: string }>`
  display: flex;
  justify-content: space-between;
`;


const Title = styled.h1({
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "33px",
});

const Header: FC<Props> = ({ title, margin }) => {
  return (
    <Container >
      <Title>{title}</Title>
      <Heart icon="redHeartIcon" alt="red heart icon" />
    </Container>
  );
};

export default Header;
