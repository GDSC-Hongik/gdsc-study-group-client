import styled from '@emotion/styled';
import GlobalNavBar from '../components_hhhk/GlobalNavBar';
import Title from '../components_hhhk/Title';

const SignUpPage = () => {
  return (
    <Wrapper>
      <GlobalNavBar></GlobalNavBar>
      <Title
        title={'회원가입'}
        subtitle={'자율 스터디 서비스에 오신 걸 환영해요!'}
      ></Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SignUpPage;
