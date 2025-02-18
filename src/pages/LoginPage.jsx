/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import NavBar from '../components_yjin/NavBar';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 추가

function LoginPage() {
  const navigate = useNavigate(); // navigate 함수 사용

  const handleSignupClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  const handleLoginClick = () => {
    navigate('/'); // 메인페이지로 이동, 아직 로그인 기능 미구현
  };

  return (
    <Wrapper>
      {/* 이미 제작된 헤더를 사용한다고 하셨으므로, 필요한 위치에 삽입 */}
      <NavBar />

      <LoginContainer>
        <LoginTitle>로그인</LoginTitle>
        <SubText>자율 스터디 서비스에 오신 걸 환영해요!</SubText>

        <FormContainer>
          {/* 학번 입력 */}
          <InputContainer>
            <StyledInput type="text" placeholder="학번" />
          </InputContainer>

          {/* 비밀번호 입력 */}
          <InputContainer style={{ marginTop: '20px' }}>
            <StyledInput type="password" placeholder="비밀번호" />
          </InputContainer>

          {/* 로그인 버튼 */}
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>

          {/* 회원가입 버튼 (텍스트 링크) - 우측 정렬 */}
          <SignupButtonContainer>
            <SignupButton onClick={handleSignupClick}>회원가입</SignupButton>
          </SignupButtonContainer>
        </FormContainer>
      </LoginContainer>
    </Wrapper>
  );
}

export default LoginPage;

/* ----- 스타일 정의 ----- */

const Wrapper = styled.div`
  width: 420px;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
`;

const LoginContainer = styled.div`
  padding-top: 152px; /* NavBar와 LoginTitle 사이의 간격을 여기서 조정 */
`;

const LoginTitle = styled.h1`
  margin-bottom: 10px; /* 다음 텍스트와 10px 간격 */
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
`;

const SubText = styled.p`
  margin-bottom: 72px;
  color: #6b6b6b;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: left;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px; /* 좌우 여유 공간 */
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #6b6b6b; /* var(--Component-Default-Sub) */
  background: #fff;
`;

const StyledInput = styled.input`
  flex: 1; /* 남은 공간을 채우도록 */
  border: none;
  outline: none;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: #000;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;
  background: #368ff7; /* var(--Component-Default-Primary) */
  cursor: pointer;

  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

const SignupButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const SignupButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
