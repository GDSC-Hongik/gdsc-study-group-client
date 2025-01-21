/** pages/StudyApplyeeStatus.jsx */
import React from 'react';
import styled from '@emotion/styled';

function StudyApplyeeStatus() {
  // 예시 Mock Data
  const studyInfo = {
    studyName: '이펙티브 타입스크립트 스터디',
    studyDescription: '타입스크립트를 심화해서 공부하고, 공유해요.',
    manager: { name: '홍길동', github: 'gildong99' }
  };

  // 지원자 리스트
  const appliers = [
    {
      name: '김코딩',
      github: 'kimcoding',
      answers: [
        {
          question: '간단한 자기소개 부탁드립니다.',
          answer:
            '저는 프론트엔드 개발자 지망생이며, 타입스크립트를 공부하고 싶습니다.'
        },
        {
          question: '스터디에 참여하고 싶은 이유는?',
          answer: '함께하는 학습을 선호합니다. 꾸준히 할 수 있을 것 같아요.'
        }
      ]
    },
    {
      name: '박해커',
      github: 'parkhacker',
      answers: [
        {
          question: '간단한 자기소개 부탁드립니다.',
          answer: '백엔드 엔지니어이며, 타입스크립트 풀스택을 해보고 싶습니다.'
        },
        {
          question: '스터디에 참여하고 싶은 이유는?',
          answer:
            '혼자서는 동기부여가 어려워서, 팀원과 협업하는 경험을 해보고 싶습니다.'
        }
      ]
    },
    {
      name: '이시큐',
      github: 'leeseq',
      answers: [
        {
          question: '간단한 자기소개 부탁드립니다.',
          answer:
            '시큐리티 관련 업무를 하고 있고, 타입 안정성에 관심이 많습니다.'
        },
        {
          question: '스터디에 참여하고 싶은 이유는?',
          answer: 'TS 심화 학습을 통해 생산성 높은 코드를 작성하고 싶습니다.'
        }
      ]
    }
  ];

  return (
    <Wrapper>
      <h1>지원 현황 페이지 (스터디장)</h1>

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
        </InfoBox>
      </Section>

      {/* 지원자 목록 */}
      <Section>
        <SectionTitle>지원자 목록</SectionTitle>
        {appliers.map((applier, index) => (
          <ApplierCard key={index}>
            <div>
              <strong>이름:</strong> {applier.name} <br />
              <strong>깃허브:</strong> {applier.github}
            </div>
            <hr />
            <h4>지원서 내용</h4>
            {applier.answers.map((item, idx) => (
              <QnABox key={idx}>
                <Question>Q: {item.question}</Question>
                <Answer>A: {item.answer}</Answer>
              </QnABox>
            ))}
          </ApplierCard>
        ))}
      </Section>
    </Wrapper>
  );
}

export default StudyApplyeeStatus;

/* Emotion CSS */
const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  box-sizing: border-box;

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

const ApplierCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 24px;
  hr {
    margin: 16px 0;
  }
  h4 {
    margin-bottom: 8px;
  }
`;

const QnABox = styled.div`
  margin-bottom: 16px;
`;

const Question = styled.div`
  font-weight: bold;
`;

const Answer = styled.div`
  margin-top: 8px;
`;
