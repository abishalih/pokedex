import { ReactNode } from "react";
import styled from "styled-components";
import { MENU_NAVIGATION } from "../../application/common/navigation";
import Header from "./Header";

const Container = styled.div`
    margin: 5rem auto;
    width: 75%;
`;

type Props = {
    children?: ReactNode;
}

const Template = (props: Props) => {
  return (
    <Container>
      <Header menu={MENU_NAVIGATION} />
    </Container>
  )
}

export default Template