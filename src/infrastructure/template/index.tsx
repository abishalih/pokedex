import { ReactNode } from "react";
import styled from "styled-components";
import { MENU_NAVIGATION } from "../../application/common/navigation";
import Header from "./Header";

const Wrapper = styled.div`
    margin: 5rem auto;
    width: 75%;
`;

type Props = {
    children?: ReactNode;
}

const Template = (props: Props) => {
  return (
    <Wrapper>
      <Header menu={MENU_NAVIGATION} />

    </Wrapper>
  )
}

export default Template