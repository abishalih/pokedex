import styled from "styled-components";

export type MenuProps = {
    icon?: string; 
    label?: string;
}
const Wrapper = styled.div`
    align-items: center;
    display: flex;
    gap: .5rem;
    img{
        display: block;
        height: 25px;
    }
`;

const Menu = ({ icon, label }: MenuProps) => {
  return (
    <Wrapper>
        <img src={icon} alt={label} />
        <div>{ label }</div>
    </Wrapper>
  )
}

export default Menu