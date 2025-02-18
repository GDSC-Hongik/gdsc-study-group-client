/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

function LoginPage() {
  return (
    <PageContainer>
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
        <LoginButton>로그인</LoginButton>

        {/* 회원가입 버튼 (텍스트 링크) - 우측 정렬 */}
        <SignupButtonContainer>
          <SignupButton>회원가입</SignupButton>
        </SignupButtonContainer>
      </FormContainer>
    </PageContainer>
  );
}

export default LoginPage;

/* ----- 스타일 정의 ----- */

// 페이지 전체 컨테이너 (가운데 정렬 + 고정 너비)
const PageContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

// "로그인" 타이틀
const LoginTitle = styled.h1`
  margin-top: 72px;
  margin-bottom: 10px; /* 다음 텍스트와 10px 간격 */

  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
`;

// "자율 스터디 서비스에 오신 걸 환영해요!"
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

// 폼 영역(전체 폭 380px)
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// 학번/비밀번호 입력 컨테이너 (가로 크기 380px)
const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px; /* 좌우 여유 공간 */
  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid #6b6b6b;
  background: #fff;
`;

// 실제 입력 필드
const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;

  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: #000;
`;

// 로그인 버튼 (가로 크기 380px)
const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;
  background: #368ff7;
  cursor: pointer;

  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
`;

// 회원가입 버튼을 우측 정렬하기 위한 래퍼
const SignupButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
`;

// 회원가입 텍스트 버튼 (기본 패딩 제거)
const SignupButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0; /* 기본 버튼 패딩 제거 */
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
