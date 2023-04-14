import styled from "styled-components";

export type MenuProps = {
    icon?: string; 
    label?: string;
}
const Container = styled.div`
    display: flex;
    img{
        display: block;
    }
`;

const Menu = ({ icon, label }: MenuProps) => {
  return (
    <Container>
        <img src={icon} />
        <div>{ label }</div>
    </Container>
  )
}

export default Menu