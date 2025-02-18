/** @jsxImportSource @emotion/react */
import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';

/**
 * QnAModal Props
 * - isOpen: 모달 열림 여부 (boolean)
 * - onClose: 모달 닫기 함수
 * - studyTitle: 스터디 제목
 * - applicant: 전체 지원자 객체 (name, question, answer 등)
 */

Modal.setAppElement('#root');

function QnAModal({ isOpen, onClose, studyTitle, applicant }) {
  // react-modal 스타일
  const customStyles = {
    content: {
      width: '1056px',
      height: '733px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#FFF',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.20)',
      flexShrink: 0,
      padding: '0px'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

  // applicant가 없으면 모달 표시하지 않음
  if (!applicant) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false} // 데모용(실서비스 시 setAppElement 사용 권장)
    >
      <Container>
        {/* 1) 스터디 제목 + "지원자 응답" */}
        <TitleWrapper>
          <StudyTitle>{studyTitle || '스터디 제목'}</StudyTitle>
          <SupporterTitle>지원자 응답</SupporterTitle>
        </TitleWrapper>

        {/* 2) 질문 박스 */}
        <QuestionBox>
          <p className="label">질문</p>
          <p className="text">{applicant.question || '질문이 없습니다.'}</p>
        </QuestionBox>

        {/* 3) 답변 박스 */}
        <AnswerBox>
          <p className="answerText">
            {applicant.answer || '아직 답변이 없습니다.'}
          </p>
        </AnswerBox>

        {/* 4) 확인 버튼 */}
        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </Container>
    </Modal>
  );
}

export default QnAModal;

// ─────────────────────────────────────────────────────────────────────────────
// 스타일 정의
// ─────────────────────────────────────────────────────────────────────────────

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 91px 346px;
`;

/* 1) 스터디 제목 + "지원자 응답" (상단) */
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 37px; /* 스터디제목 + 텍스트 → 간격 37px */
`;

const StudyTitle = styled.h2`
  margin: 0;
  color: var(--Component-Default-Primary, #368ff7);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.8px;
`;

const SupporterTitle = styled.h2`
  margin: 8px 0 0 0; /* 스터디 제목과의 간격 */
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.8px;
`;

/* 2) 질문 박스 */
const QuestionBox = styled.div`
  display: flex;
  width: 348px;
  padding: 12px;
  align-items: center;
  gap: 12px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);
  margin-bottom: 19px; /* 섹션 간 간격: 19px */

  .label {
    color: #368ff7;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
    margin: 0;
  }
  .text {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
    margin: 0;
  }
`;

/* 3) 답변 박스 */
const AnswerBox = styled.div`
  display: flex;
  width: 348px;
  height: 313px;
  padding: 12px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);
  background: #fff;
  margin-bottom: 29px; /* 섹션 간 간격: 29px */

  .answerText {
    margin: 0;
    color: #000;
    font-size: 14px;
    font-weight: 500;
  }
`;

/* 4) 확인 버튼 */
const ConfirmButton = styled.button`
  display: flex;
  width: 348px;
  height: 36px;
  padding: 8px 39px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: var(--Component-Default-Primary, #368ff7);

  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
