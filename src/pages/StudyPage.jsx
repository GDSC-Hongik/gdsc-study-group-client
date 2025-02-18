/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'; // useState 추가
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom'; // useLocation 추가

// 네비게이션 바
import NavBar from '../components_yjin/NavBar';

// 스터디 페이지 컴포넌트
import StudyIntro from '../components/StudyIntro';
import StudyReview from '../components/StudyReview';
import StudyGroup from '../components/StudyGroup';
import StudyApplierButton from '../components/StudyApplierButton';
import StudyApplyeeButton from '../components/StudyApplyeeButton';

import ModalReviewCreate from '../components_yjin/ModalReviewCreate'; // 모달 컴포넌트 임포트
import ModalReviewWrite from '../components_yjin/ModalReviewWrite';
import ModalReviewers from '../components_yjin/ModalReviewers';

function StudyPage() {
  const location = useLocation(); // useLocation 훅 사용
  const queryParams = new URLSearchParams(location.search); // 쿼리 파라미터 읽기
  const userRole = queryParams.get('userRole'); // userRole 값 추출

  // 모달 상태 관리
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [writeModalIsOpen, setWriteModalIsOpen] = useState(false);
  const [reviewersModalIsOpen, setReviewersModalIsOpen] = useState(false);

  const openCreateModal = () => setCreateModalIsOpen(true); // 모달 열기
  const closeCreateModal = () => setCreateModalIsOpen(false); // 모달 닫기

  const openWriteModal = () => setWriteModalIsOpen(true);
  const closeWriteModal = () => setWriteModalIsOpen(false);

  const openReviewersModal = () => setReviewersModalIsOpen(true);
  const closeReviewersModal = () => setReviewersModalIsOpen(false);

  // 예시 하드코딩 데이터
  const studyData = {
    studyName: '이펙티브 타입스크립트 스터디',
    studyDescription: '타입스크립트를 심화해서 공부하고, 공유해요.',
    manager: { name: '이혁', github: 'hhhkdev' },
    members: [
      { name: '천민재', github: 'Open_Mind' },
      { name: '이혁', github: 'hhhkdev' },
      { name: '이혁', github: 'hhhkdev' },
      { name: '이혁', github: 'hhhkdev' },
      { name: '이혁', github: 'hhhkdev' }
    ],
    weeklyReviews: [
      {
        roundNumber: 1,
        title: '아이엠그라운드 자기소개 하기',
        peopleCount: 6,
        date: '2024-10-31',
        method: '온라인'
      },
      {
        roundNumber: 2,
        title: '나는 이혁',
        peopleCount: 6,
        date: '2025-10-31',
        method: '온라인'
      },
      {
        roundNumber: 3,
        title: '이혁이혁이혁이혁',
        peopleCount: 6,
        date: '2024-10-31',
        method: '온라인'
      },
      {
        roundNumber: 4,
        title: '이펙티브 타입스크립트',
        peopleCount: 6,
        date: '2024-10-31',
        method: '온라인'
      }
    ],
    isClosed: false // 스터디 지원 마감 여부
  };

  return (
    <Wrapper>
      {/* 상단 네비게이션 바 */}
      <NavBar />

      {/* 본문 콘텐츠 */}
      <Content>
        {/* 상단 타이틀 영역 */}
        <div className="firstblock">
          <div className="studyintro">
            <StudyIntro
              studyName={studyData.studyName}
              studyDescription={studyData.studyDescription}
            />
          </div>
          <div className="studybutton">
            {userRole === 'manager' ? (
              <StudyApplyeeButton isClosed={studyData.isClosed} />
            ) : (
              <StudyApplierButton isClosed={studyData.isClosed} />
            )}
          </div>
        </div>

        {/* 두 번째 블록: review : group = 2:1 */}
        <div className="secondblock">
          <div className="studyreview">
            <StudyReview
              userRole={userRole}
              weeklyReviews={studyData.weeklyReviews}
              // 모달 열기 함수 전달
              openCreateModal={openCreateModal}
              openWriteModal={openWriteModal}
              openReviewersModal={openReviewersModal}
            />
          </div>
          <div className="studygroup">
            <StudyGroup
              manager={studyData.manager}
              members={studyData.members}
            />
          </div>
        </div>
      </Content>

      {/* 모달 컴포넌트 추가 */}
      <ModalReviewCreate
        isOpen={createModalIsOpen}
        onRequestClose={closeCreateModal}
      />
      <ModalReviewWrite
        isOpen={writeModalIsOpen}
        onRequestClose={closeWriteModal}
      />
      <ModalReviewers
        isOpen={reviewersModalIsOpen}
        onRequestClose={closeReviewersModal}
      />
    </Wrapper>
  );
}

export default StudyPage;

/* ─────────────────────────────────────────────────────────────────────────────
  스타일 정의
────────────────────────────────────────────────────────────────────────────── */

const Wrapper = styled.div`
  /* 전체 페이지를 높이 100vh로 설정하여 전체 화면을 꽉 채우도록 */
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100vh; /* 전체 화면 높이 */
  box-sizing: border-box;
  background-color: #fff;
`;

const Content = styled.div`
  /* 네비게이션 바 밑에 콘텐츠가 나올 수 있도록 margin-top 설정 */
  padding-top: 152px;
  display: flex;
  flex-direction: column;
  width: 1200px; /* 콘텐츠 영역 너비 고정 */
  margin: 0 auto; /* 가로 중앙 정렬 */

  .firstblock {
    display: flex;
    align-items: center; /* 세로(수직) 중앙 정렬 */
    justify-content: space-between; /* 좌우 공간을 띄워 왼쪽/오른쪽 정렬 */
    gap: 24px; /* 가운데 간격 (원하면 제거 가능) */
    margin-bottom: 72px;
  }

  /* 인트로 영역은 남은 공간을 차지 */
  .studyintro {
    flex: 1;
  }

  /* 버튼은 필요 너비만큼만 차지하고 줄어들지 않도록 */
  .studybutton {
    flex-shrink: 0;
  }

  /* 두 번째 블록: review : group = 2:1 */
  .secondblock {
    display: flex;
    gap: 24px;
  }
`;
