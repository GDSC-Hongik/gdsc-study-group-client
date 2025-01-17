import styled from '@emotion/styled';
import GlobalNavBar from '../components_hhhk/GlobalNavBar';
import Title from '../components_hhhk/Title';
import Input from '../components_hhhk/Input';
import Button from '../components_hhhk/Button';

const LoginPage = () => {
  return (
    <>
      <GlobalNavBar></GlobalNavBar>
      <Wrapper>
        <Title
          title={'로그인'}
          subtitle={'자율 스터디 서비스에 오신 걸 환영해요!'}
        ></Title>
        <form>
          <Input></Input>
          <Input></Input>
          <Button></Button>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;

export default LoginPage;
