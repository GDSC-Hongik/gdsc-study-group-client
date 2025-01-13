/** StudyReview.jsx */
import React from 'react';
import styled from '@emotion/styled';
import People from '../assets/People.svg';
import Calendar from '../assets/Calendar.svg';

function StudyReview({ userRole, weeklyReviews }) {
  // 스터디장 여부를 확인하는 조건
  const isLeader = userRole === 'manager';

  return (
    <ReviewWrapper>
      <div className="title">주차별 후기</div>

      <div className="sessions">
        {weeklyReviews.map((review, idx) => (
          <div key={idx} className="sessionItem">
            {/* 주차 정보(회차, 제목, 인원, 날짜, 방식) */}
            <div className="infoArea">
              <div className="topRow">
                <div className="roundNumber">{review.roundNumber}회차</div>
                <div className="titleText">{review.title}</div>
              </div>
              <div className="metaRow">
                <div className="metaItem">
                  <div>
                    <img src={People} width="12px" height="12px"></img>
                  </div>
                  <div>{review.peopleCount}명</div>
                </div>
                <div className="metaItem">
                  <div>
                    <img src={Calendar} width="12px" height="12px"></img>
                  </div>
                  <div>{review.date}</div>
                </div>
                <div className="metaItem">{review.method}</div>
              </div>
            </div>

            {/* 오른쪽 버튼 영역 */}
            <div className="buttonArea">
              {/* 스터디장만 보이는 '수정' 버튼 */}
              {isLeader && <button className="editBtn">수정</button>}
              {/* 화살표 이동 버튼 (회고 상세 페이지 이동 등) */}
              <button className="arrowBtn">→</button>
            </div>
          </div>
        ))}
      </div>

      {/* 스터디장만 보이는 '회고 작성하기' 버튼 */}
      {isLeader && <button className="writeBtn">회고 작성하기</button>}
    </ReviewWrapper>
  );
}

export default StudyReview;

/** emotion styled */
const ReviewWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f9f9f9;

  .title {
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 1.1rem;
  }

  .sessions {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sessionItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    padding: 12px;
  }

  .infoArea {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .topRow {
    display: flex;
    gap: 12px;
    font-weight: bold;
    font-size: 1rem;
  }

  .metaRow {
    display: flex;
    gap: 8px;
    margin-top: 4px;
  }

  .metaItem {
    background-color: #e5e5e5;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  .buttonArea {
    display: flex;
    gap: 8px;
  }

  .editBtn {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
  }

  .arrowBtn {
    background-color: #007aff;
    color: white;
    border: none;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  .writeBtn {
    margin-top: 16px;
    background-color: #007aff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
`;
