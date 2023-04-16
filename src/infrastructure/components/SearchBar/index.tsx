import styled from "styled-components";
import { SetFilterProps } from "../../../presentation/containers/ListPokedex/useFilterPokedex";
import { useSearchBar } from "./useSearchBar";

const SearchBox = styled.input`
  background: white;
  border: none;
  border-radius: 0.5rem;
  height: 35px;
  color: gray;
  padding: 5px 15px;
  padding-right: 75px;
  font-size: 14px;
  margin-left: 10px;
`;

type Props = {
    placeholder?: string;
    setFilter: SetFilterProps;
}

const SearchBar = (props: Props) => {
  const searchProps = useSearchBar(props) 
  return (
    <SearchBox {...searchProps} />
  )
}

export default SearchBar