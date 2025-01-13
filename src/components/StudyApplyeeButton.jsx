/** StudyApplyeeButton.jsx */
import React from 'react';
import styled from '@emotion/styled';

function StudyApplyeeButton({ isClosed }) {
  const handleCheckApply = () => {
    // 지원현황 페이지로 이동
    alert('지원현황 페이지로 이동합니다.');
  };

  const handleEditStudy = () => {
    // 스터디 정보 수정 페이지로 이동
    alert('스터디 정보 수정 페이지로 이동합니다.');
  };

  return (
    <ButtonWrapper>
      {/* isClosed === true 이면 지원현황 확인 버튼 미표시 */}
      {!isClosed && <button onClick={handleCheckApply}>지원현황 확인</button>}
      <button onClick={handleEditStudy}>스터디 정보 수정</button>
    </ButtonWrapper>
  );
}

export default StudyApplyeeButton;

const ButtonWrapper = styled.div`
  margin: 16px 0;

  button {
    margin-right: 8px;
    padding: 8px 12px;
    font-size: 14px;
  }
`;
