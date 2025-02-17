/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';

// QnAModal (별도 파일)
import QnAModal from './QnAModal';

// 인원/일정 표시용 (수정 불가)
import StudyTwoImages from '../../src/components_yjin/StudyTwoImages.jsx';

// 아이콘
import Calendar from '../assets/Calendar.svg';
import Book from '../assets/Book.svg';
import githubsmall from '../assets/githubsmall.svg';
import ChevronRight from '../assets/chevron-right.svg';

function StudyApplyeeStatus() {
  // 모달 열림/닫힘 상태 & 선택된 지원자
  const [isQnAModalOpen, setIsQnAModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // 예시 목데이터
  const mockData = {
    title: '이펙티브 타입스크립트 스터디',
    studyDate: '2025.02.17',
    applicantsCount: 4,
    maxCount: 6,
    schedule: '화요일 19시',
    method: '온라인',
    applicants: [
      {
        id: 1,
        name: '김혁',
        handle: 'hhhkdev',
        accepted: true,
        question: '리액트를 얼마나 공부하셨나요?',
        answer:
          '리액트 기초 강의 수강하고 개인 토이 플젝 구현 정도 해봤습니다. 현재는 책으로 공부 중입니다. 자기피알 자기피알... (생략)'
      },
      {
        id: 2,
        name: '이혁',
        handle: 'hhhkdev',
        accepted: true,
        question: '가장 자신 있는 라이브러리는?',
        answer: 'React.js를 가장 많이 써봤습니다.'
      },
      {
        id: 3,
        name: '박혁',
        handle: 'hhhkdev',
        accepted: true
      },
      {
        id: 4,
        name: '천민재',
        handle: 'Open_Mind',
        accepted: false,
        question: '리액트를 얼마나 공부하셨나요?',
        answer:
          '리액트 기초 강의 수강하고 개인 토이 플젝 구현 정도 해봤습니다. 현재는 책으로 공부 중입니다. 자기피알 자기피알 자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알자기피알 자기피알'
      },
      {
        id: 5,
        name: '김태우',
        handle: 'KAITOKIDDA',
        accepted: false
      },
      {
        id: 6,
        name: '장혁',
        handle: 'hhhkdev',
        accepted: false
      }
    ]
  };

  // 인원 아이콘 색상(GREEN/BLUE) 결정
  const peopleType =
    mockData.applicantsCount >= mockData.maxCount ? 'GREEN' : 'BLUE';

  // '수락' or '취소' 버튼 클릭
  const handleToggle = (id, accepted) => {
    if (accepted) {
      alert(`지원 취소: ${id}`);
    } else {
      alert(`수락: ${id}`);
    }
  };

  // 화살표 버튼 클릭 → 모달 열기
  const handleOpenQnA = applicant => {
    setSelectedApplicant(applicant);
    setIsQnAModalOpen(true);
  };

  // 모달 닫기
  const handleCloseQnA = () => {
    setIsQnAModalOpen(false);
    setSelectedApplicant(null);
  };

  // 스터디 개설 취소 버튼
  const handleCancelStudy = () => {
    alert('스터디 개설 취소!');
  };

  return (
    <Container>
      {/* 스터디 제목 + 개설일 한 줄 (우측 정렬) */}
      <TitleRow>
        <StudyTitle>{mockData.title}</StudyTitle>
        <StudyDate>
          <img src={Calendar} alt="calendar" />
          <span>{mockData.studyDate}</span>
        </StudyDate>
      </TitleRow>

      {/* 인원(4/6), 일정(화요일 19시) - StudyTwoImages 활용 */}
      <Row>
        <StudyTwoImages
          peopleNum={`${mockData.applicantsCount}/${mockData.maxCount}`}
          schedule={mockData.schedule}
          type={peopleType}
        />

        {/* 방식(온라인) */}
        <MethodContainer>
          <MethodIcon src={Book} alt="book" />
          <MethodText>{mockData.method}</MethodText>
        </MethodContainer>
      </Row>

      {/* 지원자 목록 */}
      <ApplicantsWrapper>
        {mockData.applicants.map(applicant => (
          <ApplicantContainer key={applicant.id}>
            <NameGithubContainer>
              <div className="leftText">
                <span className="name">{applicant.name}</span>&nbsp;
                <span className="handle">{applicant.handle}</span>
              </div>
              <img src={githubsmall} alt="github" />
            </NameGithubContainer>

            <ButtonsContainer>
              <ToggleButton
                onClick={() => handleToggle(applicant.id, applicant.accepted)}
              >
                {applicant.accepted ? '취소' : '수락'}
              </ToggleButton>
              <ArrowButton onClick={() => handleOpenQnA(applicant)}>
                <img src={ChevronRight} alt="arrow" />
              </ArrowButton>
            </ButtonsContainer>
          </ApplicantContainer>
        ))}
      </ApplicantsWrapper>

      <StudyCancelButton onClick={handleCancelStudy}>
        스터디 개설 취소
      </StudyCancelButton>

      {/* QnAModal 연결 - studyTitle(공통), applicant(선택된 지원자) */}
      <QnAModal
        isOpen={isQnAModalOpen}
        onClose={handleCloseQnA}
        studyTitle={mockData.title}
        applicant={selectedApplicant}
      />
    </Container>
  );
}

export default StudyApplyeeStatus;

// ─────────────────────────────────────────────────────────────────────────────
// 스타일 정의 (기존 그대로)
// ─────────────────────────────────────────────────────────────────────────────

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 932px;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid #c2c2c2;
`;

const TitleRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
`;

const StudyTitle = styled.h1`
  margin: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: normal;
`;

const StudyDate = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 12px;
  border: 1px solid #6b6b6b;

  color: #6b6b6b;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.325px;

  span {
    line-height: 16px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  height: 32px;
  margin-bottom: 23px;
`;

const MethodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MethodIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const MethodText = styled.p`
  margin: 0;
  color: #6b6b6b;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 32px;
`;

const ApplicantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 8px;
`;

const ApplicantContainer = styled.div`
  display: flex;
  width: 852px;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Component-Default-Outline, #c2c2c2);

  height: 48px; /* 높이를 늘려주기 위한 예시 */
  flex-shrink: 0;
`;

const NameGithubContainer = styled.div`
  display: flex;
  width: 200px;
  height: 24px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid #c2c2c2;
  background: rgba(0, 0, 0, 0);

  .leftText {
    display: flex;
    align-items: center;
  }

  .name,
  .handle {
    line-height: 24px;
  }

  .name {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.325px;
  }

  .handle {
    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.325px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ToggleButton = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 24px;

  border-radius: 12px;
  border: 1px solid var(--Component-Default-Primary, #368ff7);
  background-color: #fff;

  color: var(--Component-Default-Primary, #368ff7);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.325px;

  cursor: pointer;
`;

const ArrowButton = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  border: none;

  img {
    width: 24px;
    height: 24px;
  }
`;

const StudyCancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 33px;

  border-radius: 8px;
  border: 1px solid var(--Component-Default-Primary, #368ff7);
  background-color: #fff;

  color: var(--Component-Default-Primary, #368ff7);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.35px;

  cursor: pointer;
`;
