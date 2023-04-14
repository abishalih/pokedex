import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

type Props = {
    children?: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Wrapper>
        { children }
    </Wrapper>
  )
}

export default Container