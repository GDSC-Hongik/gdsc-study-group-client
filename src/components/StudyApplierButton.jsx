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
        <button disabled>지원 마감</button>
      ) : (
        <button onClick={handleApply}>스터디 지원하기</button>
      )}
    </ButtonWrapper>
  );
}

export default StudyApplierButton;

const ButtonWrapper = styled.div`
  margin: 16px 0;

  button {
    padding: 8px 12px;
    font-size: 14px;
  }
`;
