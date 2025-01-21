/** pages/StudyApplierStatus.jsx */
import React from 'react';
import styled from '@emotion/styled';

function StudyApplierStatus() {
  // 예시 Mock Data
  const studyInfo = {
    studyName: '이펙티브 타입스크립트 스터디',
    studyDescription: '타입스크립트를 심화해서 공부하고, 공유해요.',
    manager: { name: '홍길동', github: 'gildong99' },
    totalApplierCount: 10 // 전체 지원자 수
  };

  const myApplyData = {
    name: '김코딩',
    github: 'kimcoding',
    // 내 지원 상태 예시
    status: '합격 대기 중',
    answers: [
      {
        question: '간단한 자기소개 부탁드립니다.',
        answer: '타입스크립트를 조금 더 깊이있게 학습하고 싶어서 지원했습니다!'
      },
      {
        question: '스터디에 참여하고 싶은 이유는?',
        answer: '함께 공부하면 동기부여도 되고 지식도 더 잘 쌓일 것 같아요.'
      }
    ]
  };

  return (
    <Wrapper>
      <h1>지원 상태 확인 페이지 (일반 사용자)</h1>

      {/* 스터디 정보 */}
      <Section>
        <SectionTitle>스터디 정보</SectionTitle>
        <InfoBox>
          <div>
            <strong>스터디명:</strong> {studyInfo.studyName}
          </div>
          <div>
            <strong>설명:</strong> {studyInfo.studyDescription}
          </div>
          <div>
            <strong>매니저:</strong> {studyInfo.manager.name} /{' '}
            {studyInfo.manager.github}
          </div>
          <div>
            <strong>전체 지원자 수:</strong> {studyInfo.totalApplierCount}명
          </div>
        </InfoBox>
      </Section>

      {/* 내 지원 상태 */}
      <Section>
        <SectionTitle>내 지원 상태</SectionTitle>
        <InfoBox>
          <div>
            <strong>이름:</strong> {myApplyData.name}
          </div>
          <div>
            <strong>깃헙:</strong> {myApplyData.github}
          </div>
          <div>
            <strong>현황:</strong> {myApplyData.status}
          </div>
        </InfoBox>
      </Section>

      {/* 질문/답변 (지원서 내용) */}
      <Section>
        <SectionTitle>내 지원서</SectionTitle>
        {myApplyData.answers.map((item, idx) => (
          <QnABox key={idx}>
            <Question>Q: {item.question}</Question>
            <Answer>A: {item.answer}</Answer>
          </QnABox>
        ))}
      </Section>
    </Wrapper>
  );
}

export default StudyApplierStatus;

/* Emotion CSS */
const Wrapper = styled.div`
  /* 1920x1080 고정 레이아웃 예시 (원하는 대로 조정 가능) */
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  box-sizing: border-box;

  /* 좌우 패딩 360px → 실제 사용 가능 폭 = 1200px */
  padding: 72px 360px;

  background-color: #f7f7f7;

  h1 {
    margin-bottom: 32px;
    font-size: 24px;
    text-align: center;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const InfoBox = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  background-color: #fff;
  line-height: 1.5;

  & > div + div {
    margin-top: 8px;
  }
`;

const QnABox = styled.div`
  margin-bottom: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
`;

const Question = styled.div`
  font-weight: bold;
`;

const Answer = styled.div`
  margin-top: 8px;
`;
