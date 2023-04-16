import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const BackPage = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;
const NextPage = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;

type Props = {
    nextPage?: ()=>void;
    prevPage?: ()=>void;
}

const Pagination = ({
    nextPage, 
    prevPage
}: Props) => {
  return (
    <Wrapper>
        <BackPage onClick={prevPage}> {`<< Back`} </BackPage>
        <NextPage onClick={nextPage}> {`Next >>`} </NextPage>
    </Wrapper>
  )
}

export default Pagination