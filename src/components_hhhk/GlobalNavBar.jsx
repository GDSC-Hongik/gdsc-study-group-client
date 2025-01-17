import styled from '@emotion/styled';
import Logo from '../assets/Logo.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GlobalNavBar = () => {
  // 로그인이 된 상태냐 아니냐에 따라 보여주는 버튼이 다름.
  // 토큰/세션 등을 확인하여 다른 버튼을 확인해야할듯?
  const [logined, setLogined] = useState(true);
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/');
  };

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Wrapper>
        <img src={Logo} width={'57.83px'} onClick={handleClickLogo}></img>
        {logined && <Button onClick={handleClick}>로그인</Button>}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 20px;

  img:hover,
  button:hover {
    cursor: pointer;
  }
`;

const Container = styled.header`
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #e1e1e1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  position: fixed;
  top: 0px;
  z-index: 3;
`;

export default GlobalNavBar;
