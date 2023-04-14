import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 1rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1rem;
`;

type Props = {
    children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <Container>{ children }</Container>
  )
}

export default Card