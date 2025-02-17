// StudyApplierStatusPage.jsx
import React from 'react';
import styled from '@emotion/styled';
import NavBar from '../components_yjin/NavBar';
import StudyApplierStatus from '../components/StudyApplierStatus';

function StudyApplierStatusPage() {
  return (
    <Wrapper>
      {/* 네비게이션 바 (별도 컨테이너 없이 바로 배치) */}
      <NavBar />

      {/* 본문: StudyApplierStatus */}
      <Content>
        <StudyApplierStatus />
      </Content>
    </Wrapper>
  );
}

export default StudyApplierStatusPage;

/* 
  Wrapper: 전체 페이지 래퍼
  - width: 1280px 고정, 가로 중앙 정렬
  - NavBar와 Content를 같은 래퍼 안에서 순서대로 배치
*/
const Wrapper = styled.div`
  display: block;
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
`;

/* 본문 영역 (스터디 지원 현황) */
const Content = styled.div`
  width: 892px; /* 원하는 고정 폭 */
  margin: 0 auto; /* 가로 중앙 정렬 */
  padding-top: 296px; /* 네비게이션 바와의 간격(원하는 수치로 조정) */
`;
