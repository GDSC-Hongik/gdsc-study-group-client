import React from 'react';
import styled from '@emotion/styled';
import People from '../assets/People.svg';

// 샘플 목데이터
const sampleData = [
  {
    id: 1,
    title: '이펙티브 타입스크립트 스터디',
    members: 6,
    method: '온라인',
    status: '승인 완료'
  },
  {
    id: 2,
    title: '이펙티브 자바 스터디',
    members: 6,
    method: '오프라인',
    status: '승인 대기'
  },
  {
    id: 3,
    title: '스프링 부트 스터디',
    members: 4,
    method: '병행',
    status: '승인 대기'
  },
  {
    id: 4,
    title: '고랭 스터디',
    members: 6,
    method: '온라인',
    status: '승인 대기'
  }
];

function StudyApplierStatus() {
  // 취소 버튼 클릭 시 처리 로직 (예시)
  const handleCancel = studyId => {
    alert(`${studyId}번 스터디 지원 취소`);
    // 실제 로직(API 호출 등)은 프로젝트에 맞게 구현
  };

  return (
    <Container>
      {/* 상단 타이틀 */}
      <Title>나의 스터디 지원 현황</Title>

      {/* 스터디 정보 목록 */}
      {sampleData.map((study, index) => (
        <StudyItem key={study.id} isFirstItem={index === 0}>
          {/* 왼쪽 그룹 (제목, 인원 박스, 방식, 상태) */}
          <LeftGroup>
            <StudyTitle>{study.title}</StudyTitle>
            <MembersBox>
              <img src={People} alt="People" />
              {study.members}명
            </MembersBox>
            <MethodBox>{study.method}</MethodBox>
            <StatusBox>{study.status}</StatusBox>
          </LeftGroup>

          {/* 취소 버튼 (우측 정렬) */}
          <CancelButton onClick={() => handleCancel(study.id)}>
            취소
          </CancelButton>
        </StudyItem>
      ))}
    </Container>
  );
}

export default StudyApplierStatus;

/* ───────────────────────────────────────────────────────────────────────────
   스타일 정의
   ─────────────────────────────────────────────────────────────────────────── */

/**
 * 1) studyitem 간 간격 8px
 * 2) "나의 스터디 지원 현황"과 첫 아이템 간 24px 띄우기
 * 3) 첫 번째 아이템에만 24px 간격, 이후 항목 간에는 8px 간격 유지
 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* studyitem 간 간격 8px */
  width: 892px;
  padding: 24px 20px;

  border-radius: 16px;
  border: 1px solid var(--Component-Default-Outline, #c2c2c2);
`;

/** 상단 타이틀 */
const Title = styled.h1`
  color: #368ff7;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.35px;
  margin: 0; /* 기본 margin 제거 */
  margin-bottom: 16px; /* 제목과 첫 아이템 사이에 간격 24px */
`;

/** studyitem 자체는 한 줄(왼쪽 그룹 + 취소 버튼) */
const StudyItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px;

  border-radius: 8px;
  border: 1px solid var(--Component-Default-Outline, #c2c2c2);
`;

/** 왼쪽 그룹(제목, 인원, 방식, 상태) 한 줄 배치 */
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

/** 스터디 제목 (인원 박스와 24px 간격) */
const StudyTitle = styled.div`
  margin-right: 24px;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

/** 인원 박스 (방식 박스와 14px 간격) */
const MembersBox = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-right: 14px;
  border-radius: 12px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);

  color: var(--Component-Default-Sub, #6b6b6b);
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.325px;
`;

/** 방식 박스 (지원 상태 박스와 14px 간격) */
const MethodBox = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-right: 14px;
  border-radius: 12px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);

  color: var(--Component-Default-Sub, #6b6b6b);
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.325px;
`;

/** 지원 상태 박스 */
const StatusBox = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 12px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);

  color: var(--Component-Default-Sub, #6b6b6b);
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.325px;
`;

/** 취소 버튼 (우측) */
const CancelButton = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  margin-left: auto; /* 왼쪽 그룹과 버튼 사이 자동 여백 → 우측 정렬 */
  border-radius: 12px;
  border: 1px solid var(--Component-Default-Primary, #368ff7);
  background-color: #fff;

  color: var(--Component-Default-Primary, #368ff7);
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.325px;

  cursor: pointer;
`;
