/** StudyApplyeeButton.jsx */
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

function StudyApplyeeButton({ isClosed }) {
  const navigate = useNavigate(); // navigate 함수 사용

  const handleCheckApply = () => {
    // 지원현황 페이지로 이동
    navigate('/applyeestatus'); // StudyApplyeeStatusPage로 이동
  };

  const handleEditStudy = () => {
    // 스터디 정보 수정 페이지로 이동
    alert('스터디 정보 수정 페이지로 이동합니다.');
  };

  return (
    <ButtonWrapper>
      {/* isClosed === true 이면 '지원현황 확인' 버튼은 표시되지 않음 */}
      {!isClosed && (
        <CheckApplyButton onClick={handleCheckApply}>
          지원 현황
        </CheckApplyButton>
      )}
      <EditStudyButton onClick={handleEditStudy}>수정하기</EditStudyButton>
    </ButtonWrapper>
  );
}

export default StudyApplyeeButton;

/* 
  버튼들을 감싸는 래퍼입니다.
  별도 요구사항이 없다면 flex 컨테이너로 버튼들을 가로로 나열하고
  버튼 간 간격을 쉽게 조절할 수 있도록 gap을 추가했습니다.
*/
const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;
`;

/*
  '지원현황 확인' 버튼 스타일
  - 테두리가 있고 배경색이 없는 스타일
  - 텍스트는 파란색 (#368FF7)
*/
const CheckApplyButton = styled.button`
  box-sizing: border-box;
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
  background: #fff;

  color: var(--Component-Default-Primary, #368ff7);
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  cursor: pointer;

  /* 필요 시 호버/액티브 등의 추가 스타일 정의 가능 */
`;

/*
  '스터디 정보 수정' 버튼 스타일
  - 파란색 배경(#368FF7)
  - 텍스트는 흰색 (#FFF)
*/
const EditStudyButton = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 160px;
  height: 36px;
  padding: 8px 39px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 18px;
  background: var(--Component-Default-Primary, #368ff7);
  border: 1px solid var(--Component-Default-Primary, #368ff7);

  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  cursor: pointer;

  /* 필요 시 호버/액티브 등의 추가 스타일 정의 가능 */
`;
