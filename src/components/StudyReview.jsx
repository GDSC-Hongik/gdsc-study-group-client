/** StudyReview.jsx */
import React from 'react';
import styled from '@emotion/styled';

import People from '../assets/People.svg';
import Calendar from '../assets/Calendar.svg';
import ChevronRight from '../assets/chevron-right.svg';

function StudyReview({ userRole, weeklyReviews }) {
  // 스터디장 여부 확인
  const isLeader = userRole === 'manager';

  return (
    <ReviewWrapper>
      {/* 주차별 후기 텍스트 */}
      <div className="title">주차별 후기</div>

      <div className="sessions">
        {weeklyReviews.map((review, idx) => (
          <div key={idx} className="sessionItem">
            {/* 왼쪽 영역: 회차, 제목, 메타 아이템(인원/날짜/온라인) 한 줄 배치 */}
            <div className="infoArea">
              <div className="roundNumber">{review.roundNumber}회차</div>
              <div className="titleText">{review.title}</div>
              <div className="metaWrapper">
                <div className="metaItem">
                  <img src={People} alt="people" />
                  <span>{review.peopleCount}명</span>
                </div>
                <div className="metaItem">
                  <img src={Calendar} alt="calendar" />
                  <span>{review.date}</span>
                </div>
                <div className="metaItem method">{review.method}</div>
              </div>
            </div>

            {/* 오른쪽 버튼 영역 */}
            <div className="buttonArea">
              {/* (스터디장만 보이는 '수정' 버튼) */}
              {isLeader && <button className="editBtn">수정</button>}
              {/* 화살표 이동 버튼 (회고 상세 페이지 이동 등) */}
              <button className="arrowBtn">
                <img src={ChevronRight} alt="chevron-right" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* (스터디장만 보이는 '회고 작성하기' 버튼) */}
      {isLeader && <button className="writeBtn">회고 작성하기</button>}
    </ReviewWrapper>
  );
}

export default StudyReview;

/** emotion styled */
const ReviewWrapper = styled.div`
  box-sizing: border-box;
  /* ===== 전체 박스 ===== */
  width: 892px; /* 고정 폭 */
  display: flex;
  flex-direction: column;
  /* 상하 24px, 좌우 20px 패딩 */
  padding: 24px 20px;
  /* '주차별 후기' 텍스트와 내부 박스 간 간격 */
  gap: 24px;

  border-radius: 16px;
  border: 1px solid #c2c2c2;

  .title {
    color: #368ff7;
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.35px;
  }

  .sessions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  /* ===== 회차별 박스 ===== */
  .sessionItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    width: 852px; /* 내부 박스 고정 폭 */
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #c2c2c2;
  }

  /* ===== 한 줄 배치 (회차, 제목, 메타 항목) ===== */
  .infoArea {
    display: flex;
    align-items: center;
    gap: 24px; /* 회차, 제목, 메타묶음 간격 */
  }

  .metaWrapper {
    display: flex;
    align-items: center;
    gap: 14px; /* 인원, 날짜, 온라인 간격 */
  }

  /* ===== 회차 텍스트 ===== */
  .roundNumber {
    color: #368ff7;
    font-family: Pretendard, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
  }

  /* ===== 제목 텍스트 ===== */
  .titleText {
    color: #000;
    font-family: Pretendard, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
  }

  /* ===== 메타 아이템 (인원, 날짜, 온라인/오프라인) ===== */
  .metaItem {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 4px 12px;
    border-radius: 12px;
    border: 1px solid #6b6b6b;
    color: #6b6b6b;

    font-family: Pretendard, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.325px;

    img {
      width: 16px;
      height: 16px;
      fill: #6b6b6b;
    }
  }

  /* ===== 오른쪽 버튼 영역 ===== */
  .buttonArea {
    display: flex;
    align-items: center;
    /* 수정 버튼과 chevron 버튼 간 간격 24px */
    gap: 24px;
  }

  /* 화살표 버튼 아이콘 크기 */
  .arrowBtn img {
    width: 24px;
    height: 24px;
  }

  /* 공통 버튼(초기화) */
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-family: Pretendard, sans-serif;
  }

  /* ===== 회고 작성하기 버튼 (스터디장 전용) ===== */
  .writeBtn {
    width: 122px;
    height: 33px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #368ff7;

    color: #368ff7;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.35px;
  }

  /* ===== 수정하기 버튼 (스터디장 전용) ===== */
  .editBtn {
    width: 47px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #368ff7;

    color: #368ff7;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.325px;
  }
`;
