import { ReactNode } from "react";
import styled from "styled-components";
import { MENU_NAVIGATION } from "../../application/common/navigation";
import Container from "./Container";
import Header from "./Header";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 3rem auto;
    width: 75%;
`;

type Props = {
    children?: ReactNode;
}

const Template = ({ children }: Props) => {
  return (
    <Wrapper>
        <Header menu={MENU_NAVIGATION} />
        <Container>{ children }</Container>
    </Wrapper>
  )
}

export default Template