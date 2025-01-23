import styled from '@emotion/styled';
import { css } from '@emotion/css';
import NavBar from '../components_yjin/NavBar';

const Home1 = () => {
  return (
    <>
      <NavBar />
      <Container className="content-wrapper">
        <Ptag>home 페이지입니다.</Ptag>
      </Container>
    </>
  );
};

export default Home1;

const Container = styled.div`
  background-color: #ffffff;

  width: 1200px; /* 최대 너비 */
  height: 100vh;
`;

const Ptag = styled.p`
  font-size: 30px;
`;
