// StudyApplierStatusPage.jsx
import React from 'react';
import styled from '@emotion/styled';

// 실제 경로에 맞춰 StudyApplierStatus를 import 하세요!
import StudyApplierStatus from './StudyApplierStatus';

function StudyApplierStatusPage() {
  return (
    <Wrapper>
      {/* 두 번째 블록: StudyApplierStatus 컴포넌트 */}
      <div className="secondblock">
        <StudyApplierStatus />
      </div>
    </Wrapper>
  );
}

export default StudyApplierStatusPage;

/* 

*/
const Wrapper = styled.div`
  width: 1280px;
  //height: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;

  /* 첫 블록: 헤더 영역 */
  .firstblock {
    margin-top: 72px;
    margin-bottom: 72px;
    width: 892px;

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
    }
  }

  /* 두 번째 블록: StudyApplierStatus 표시 */
  .secondblock {
    width: 892px;
    /* 필요 시 추가 스타일링 */
  }
`;
