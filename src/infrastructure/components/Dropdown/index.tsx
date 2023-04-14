import styled from "styled-components";
import { useDropdown } from "./useDropdown";

const Wrapper = styled.select`
  background: white;
  border: none;
  border-radius: 0.5rem;
  height: 35px;
  color: gray;
  padding: 5px;
  padding-right: 75px;
  font-size: 14px;
  margin-left: 10px;
`;

const Option = styled.option`
`;

export type DropdownProps = {
  api: string;
  label?: string;
};

const Dropdown = ({ api, label }: DropdownProps) => {
  const { handleClick, options,  } = useDropdown(api);
  
  return (
    <Wrapper onClick={handleClick}>
      <Option value=""> - {label} - </Option>
      {options.map(({id, name}, key)=>(
          <Option key={key} value={id}>{name}</Option>
      ))}
    </Wrapper>
  );
};

export default Dropdown;
