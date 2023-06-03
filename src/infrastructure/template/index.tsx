import { ReactNode } from "react";
import styled from "styled-components";
import { MENU_NAVIGATION } from "../../application/common/navigation";
import Container from "./Container";
import Header from "./Header";

const Wrapper = styled.div`
  background-color: #ff174b;
  border: 1px solid gray;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  max-height: 750px;
  gap: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem;
  margin: 1rem auto;
  width: 500px;
`;

type Props = {
    children?: ReactNode;
}

const Template = ({ children }: Props) => {
  return (
    <Wrapper id="scrollableDiv">
        <Header menu={MENU_NAVIGATION} />
        <Container>{ children }</Container>
    </Wrapper>
  )
}

export default Template