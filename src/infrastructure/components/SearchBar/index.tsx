import styled from "styled-components";

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
}

const SearchBar = ({ placeholder="Here we search" }: Props) => {
  return (
    <SearchBox placeholder={placeholder} />
  )
}

export default SearchBar