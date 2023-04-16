import styled from "styled-components";
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
`;

const Title = styled.h1`
    color: #005eb8;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;
`;

const Subtitle = styled.p`
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 60px;
`;
const LoadingPage = () => (
    <Container>
        <Title>Mohon tunggu beberapa saat.</Title>
        <Subtitle>Kami sedang memproses permintaan Anda</Subtitle>
    </Container>
);

export default LoadingPage;
