import styled from "styled-components";
import Dropdown from "../../../../infrastructure/components/Dropdown";
import { SetFilterProps } from "../useFilterPokedex";

const Wrapper = styled.div`
    display: flex;
    gap: .5rem;
    margin-bottom: 3rem;
`;

type DropdownProps = {
  api: string;
  label?: string;
};

type Props = {
    filters: Array<DropdownProps>;
    setFilter: SetFilterProps;
}

const FilterPokedex = ({filters = [], setFilter}: Props) => {
  return (
    <Wrapper>
        {filters.map((filterProps, key)=><Dropdown {...filterProps} key={key} setFilter={setFilter} />)}
    </Wrapper>
  )
}

export default FilterPokedex