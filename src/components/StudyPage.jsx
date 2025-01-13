import React from 'react';
import styled from '@emotion/styled';

import StudyIntro from '../components/StudyIntro';
import StudyReview from '../components/StudyReview';
import StudyGroup from '../components/StudyGroup';
import StudyApplierButton from '../components/StudyApplierButton';
import StudyApplyeeButton from '../components/StudyApplyeeButton';

function StudyPage({ userRole }) {
  // 스터디 데이터는 예시로 하드코딩
  const studyData = {
    studyName: '이펙티브 타입스크립트 스터디',
    studyDescription: '타입스크립트를 심화해서 공부하고, 공유해요.',
    manager: {
      name: '이혁',
      github: 'hhhkdev'
    },
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
        title: '이펙티브 타입스크립트트',
        peopleCount: 6,
        date: '2024-10-31',
        method: '온라인'
      }
    ],
    isClosed: false // 스터디 지원 마감 여부
  };

  return (
    <Wrapper>
      {/* 상단 헤더는 생략하셨다고 하니 생략 */}
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

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .firstblock {
    display: flex;
    flex-direction: row;
  }

  .secondblock {
    display: flex;
    flex-direction: row;
  }

  .studyintro {
  }

  .studygroup {
  }

  .studyreview {
  }

  .studybutton {
  }
`;
