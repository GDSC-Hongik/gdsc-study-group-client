import styled from '@emotion/styled';

import GlobalNavBar from '../components/GlobalNavBar';
import StudyListItem from '../components/StudyListItem';
import LocalNavBar from '../components/LocalNavBar';

const Home = () => {
  return (
    <Container>
      <GlobalNavBar></GlobalNavBar>
      <LocalNavBar></LocalNavBar>
      <Wrapper>
        <StudyListItem></StudyListItem>
        <StudyListItem></StudyListItem>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.article`
  width: 1280px;
  display: flex;
  position: relative;
  padding-top: 180px;
  margin: 0 auto;
`;

const Container = styled.main`
  width: 100%;
  height: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default Home;
