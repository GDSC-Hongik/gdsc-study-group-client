/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import NavBar from '../components_yjin/NavBar'; // 네비게이션 바 임포트

function SignupPage() {
  return (
    <Wrapper>
      {/* 네비게이션 바 */}
      <NavBar />

      <PageContainer>
        {/* 제목 */}
        <Title>회원가입</Title>

        {/* 서브 텍스트 */}
        <SubText>자율 스터디 서비스에 오신 걸 환영해요!</SubText>

        {/* 1) 이름 */}
        <Label style={{ marginTop: '83px' }}>이름</Label>
        <InputContainer style={{ marginTop: '18px' }}>
          <StyledInput type="text" placeholder="ex) 홍길동" />
        </InputContainer>

        {/* 2) 학번 */}
        <Label style={{ marginTop: '48px' }}>학번</Label>
        <InputContainer style={{ marginTop: '9px' }}>
          <StyledInput type="text" placeholder="ex) C000000" />
        </InputContainer>

        {/* 3) 비밀번호 */}
        <Label style={{ marginTop: '49px' }}>비밀번호</Label>
        <InputContainer style={{ marginTop: '10px' }}>
          <StyledInput type="password" placeholder="placeholder 추천 받아요" />
        </InputContainer>

        {/* 4) 비밀번호 확인 */}
        <Label style={{ marginTop: '27px' }}>비밀번호 확인</Label>
        <InputContainer style={{ marginTop: '16px' }}>
          <StyledInput type="password" placeholder="placeholder 추천 받아요" />
        </InputContainer>

        {/* 5) GitHub Handle명 */}
        <Label style={{ marginTop: '97px' }}>GitHub Handle명</Label>
        <InputContainer style={{ marginTop: '16px' }}>
          <StyledInput type="text" placeholder="placeholder 추천 받아요" />
        </InputContainer>

        {/* 가입하기 버튼 */}
        <SignupButton style={{ marginTop: '176px' }}>가입하기</SignupButton>
      </PageContainer>
    </Wrapper>
  );
}

export default SignupPage;

/* ----- 스타일 정의 ----- */

// 페이지 전체 컨테이너
const Wrapper = styled.div`
  width: 420px;
  height: 100vh; /* 화면 높이에 맞춰 페이지 크기를 설정 */
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PageContainer = styled.div`
  padding-top: 152px; /* NavBar와 본문 간의 간격을 고정 */
  //height: 100%; /* Wrapper와 함께 100vh를 사용 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h1`
  margin-bottom: 0;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.6px;
  line-height: normal;
  text-align: left;
`;

const SubText = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: #6b6b6b;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: normal;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  width: 380px;
  padding: 12px 0px 12px 12px; /* 상하 12px, 좌 12px, 우 0px */
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #6b6b6b;
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

const SignupButton = styled.button`
  display: flex;
  width: 380px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #368ff7; /* var(--Component-Default-Primary) */
  cursor: pointer;
  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: normal;
  margin-bottom: 258px;
`;
