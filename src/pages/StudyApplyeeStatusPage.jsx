/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

// 이미 구현된 네비게이션 바
import NavBar from '../components_yjin/NavBar';

// 스터디장 뷰 컴포넌트 (예: 지원자 현황)
import StudyApplyeeStatus from '../components/StudyApplyeeStatus';

function StudyApplyeeStatusPage() {
  return (
    <Wrapper>
      {/* 이미 구현된 네비게이션 바 */}
      <NavBar />

      {/* 첫 번째 블록: 타이틀 영역 */}
      <div className="firstblock">
        <div className="titleRow">
          <h2 className="mainTitle">스터디 지원자 현황</h2>
          <span className="subTitle">현재 모집 중인 스터디예요.</span>
        </div>
      </div>
      {/* 두 번째 블록: 스터디 지원자 현황 컴포넌트 */}
      <div className="secondblock">
        <StudyApplyeeStatus />
      </div>
    </Wrapper>
  );
}

export default StudyApplyeeStatusPage;

// ─────────────────────────────────────────────────────────────────────────────
// 스타일 정의
// ─────────────────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  /* 전체 화면을 1920x1080로 가정 (프로젝트 상황에 따라 조정 가능) */
  width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
  height: 100vh; /* 화면 높이에 맞게 설정 */

  /* 좌우 패딩 360px → 실제 사용 가능 폭 = 1200px */
  padding-left: 360px;
  padding-right: 360px;

  /* 첫 번째 블록: 타이틀 영역 */
  .firstblock {
    /* 네비게이션 바 아래 253px 간격 */
    padding-top: 152px;
    margin-bottom: 72px;

    /* 내부 콘텐츠를 1200px 너비로 고정 */
    width: 1200px;

    /* 필요한 경우 display, flex 등을 써서 추가 정렬 가능 */
    .titleRow {
      display: flex;
      align-items: center;
      gap: 10px; /* “스터디 지원자 현황”과 “현재 모집 중인 스터디예요.” 사이 간격 */
    }

    .mainTitle {
      /* 스터디 지원자 현황 */
      margin: 0; /* 기본 h2 여백 제거 */
      color: #000;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.6px;
    }

    .subTitle {
      /* 현재 모집 중인 스터디예요. */
      color: #6b6b6b; /* var(--Component-Default-Sub) */
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }

  .secondblock {
    /* 1200px 고정 폭 */
    width: 1200px;
    /* 필요하다면 margin-bottom, margin-top 등 추가 간격 조절 */
  }
`;
