import styled from "styled-components";

export type MenuProps = {
    icon?: string; 
    label?: string;
}
const Wrapper = styled.a`
    color: black;
    align-items: center;
    display: flex;
    gap: .5rem;
    text-decoration: none;
    img{
        display: block;
        height: 25px;
    }
`;

const Menu = ({ icon, label }: MenuProps) => {
  return (
    <Wrapper href="/">
        <img src={icon} alt={label} />
        <div>{ label }</div>
    </Wrapper>
  )
}

export default Menu