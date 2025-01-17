/** StudyApplierButton.jsx */
import React from 'react';
import styled from '@emotion/styled';

function StudyApplierButton({ isClosed }) {
  const handleApply = () => {
    // 스터디 지원 로직
    alert('스터디에 지원했습니다!');
  };

  return (
    <ButtonWrapper>
      {isClosed ? (
        <ClosedButton disabled>지원 마감</ClosedButton>
      ) : (
        <ApplyButton onClick={handleApply}>지원하기</ApplyButton>
      )}
    </ButtonWrapper>
  );
}

export default StudyApplierButton;

/* 
  버튼들을 감싸는 래퍼입니다.
  필요하시면 gap, flex 등으로 버튼 배치를 조정하시면 됩니다.
*/
const ButtonWrapper = styled.div`
  margin: 16px 0;
  box-sizing: border-box;
`;

/* 
  "스터디 지원하기" 버튼 스타일 
  (배경 파랑, 글씨 흰색 + 테두리 파랑)
*/
const ApplyButton = styled.button`
  display: flex;
  width: 160px;
  height: 36px;
  padding: 8px 39px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 18px;
  border: 1px solid var(--Component-Default-Primary, #368ff7);
  background: var(--Component-Default-Primary, #368ff7);

  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;

  cursor: pointer;
`;

/*
  "지원 마감" 버튼 스타일 
  (바탕 흰색, 글씨 회색, 테두리 회색)
  disabled인 상태이므로 cursor를 not-allowed로 주어도 좋습니다.
*/
const ClosedButton = styled.button`
  display: flex;
  width: 160px;
  height: 36px;
  padding: 8px 39px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 18px;
  border: 1px solid #6b6b6b;

  color: #6b6b6b;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;

  background: #fff;
  //cursor: not-allowed; /* disabled 상태라면 시각적 힌트를 위해 */
`;
