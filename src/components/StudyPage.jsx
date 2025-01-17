import React from 'react';
import styled from '@emotion/styled';

import StudyIntro from '../components/StudyIntro';
import StudyReview from '../components/StudyReview';
import StudyGroup from '../components/StudyGroup';
import StudyApplierButton from '../components/StudyApplierButton';
import StudyApplyeeButton from '../components/StudyApplyeeButton';

function StudyPage({ userRole }) {
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
      {/* 상단 헤더(80px)는 나중에 들어갈 예정 */}
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

      <div className="secondblock">
        <div className="studyreview">
          <StudyReview
            userRole={userRole}
            weeklyReviews={studyData.weeklyReviews}
          />
        </div>
        <div className="studygroup">
          <StudyGroup manager={studyData.manager} members={studyData.members} />
        </div>
      </div>
    </Wrapper>
  );
}

export default StudyPage;

/* 1920x1080 고정 레이아웃 + 양옆 패딩 360px, 
   상단 헤더(80px)와 첫 블록 사이 72px 간격 고정 */
const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  box-sizing: border-box;

  /* 좌우 패딩 360px → 실제 사용 가능 폭 = 1200px */
  padding-left: 360px;
  padding-right: 360px;

  /* 첫 번째 블록: 헤더 아래 72px 간격 띄우기 */
  .firstblock {
    display: flex;
    gap: 24px;
    margin-top: 72px;
    margin-bottom: 72px; /* 추가 간격 필요시 조정 */
    /* ★ 핵심: 1200px로 고정해서, secondblock과 동일한 너비 사용 ★ */
    width: 1200px;
    /* 높이가 달라질 경우 수직 정렬 위해 align-items 사용 가능 */
    align-items: center;
    box-sizing: border-box;

    .studyintro {
      /* intro가 나머지 공간을 전부 차지 */
      flex: 1;
      /* min-width: 0; // 내부 콘텐츠가 넘치지 않도록 */
    }

    .studybutton {
      /* 버튼은 필요한 만큼만 넓이를 차지(줄어들지 않음) */
      flex-shrink: 0;
      /* 필요하다면 width: auto; or width: 특정값; */
    }
  }

  /* 두 번째 블록: review : group = 2:1 */
  .secondblock {
    display: flex;
    gap: 24px;
    /* firstblock과 동일한 1200px 폭 */
    width: 1200px;
    //align-items: center;

    .studyreview {
      //flex: 2;
      //min-width: 0;
      flex: 1;
    }
    .studygroup {
      flex-shrink: 0;
      //flex: 1;
      //min-width: 0;
    }
  }
`;
