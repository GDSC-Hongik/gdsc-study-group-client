// '지원하시겠습니까?' 지원 모달 -> 스터디 박스에서 '지원하기' 버튼 클릭하면 나온다.

import Modal from 'react-modal';
import styled from '@emotion/styled';

import WeekNLeft from '../assets/weekN-left.svg';
import WeekNRight from '../assets/weekN-right.svg';
import ExpectPerson from '../assets/apply-person.svg';

// hasQuestion : 모달에 질문을 포함할지 여부를 결정
// buttonText : 모달을 여는 버튼에 표시될 텍스트
// closeModal : 모달을 닫게 하는 함수

const ModalApply = ({ isOpen, onClose, hasQuestion }) => {
  /* hasQuestion - 모달 스타일에 조건부 스타일 적용 */
  /* 1. hasQuestion == false: 질문 없음 */
  /* 2. hasQuestion == true: 질문 있음 */

  const getCustomStyles = hasQuestion => ({
    content: {
      margin: '0px',
      padding: '0px',
      width: '1056px',
      height: hasQuestion ? '765px' : '645px' /* 조건부 스타일 */,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.50)'
    }
  });

  const customStyles = getCustomStyles(hasQuestion);

  return (
    <>
      {/* 실제 구현할 때는 상위 파일에서 모달 여닫힘을 관리하므로 이 위치에 버튼이 필요없다. */}
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <Content>
          <>
            <Ptag className="title1">이펙티브 타입스크립트 스터디</Ptag>
            <Ptag>지원하시겠습니까?</Ptag>
          </>
          <>
            <Ptag className="discript">
              스터디 설명스터디 설명스터디 설명스터디 설명 스터디 설명스터디
              설명스터디 설명스터디 설명
            </Ptag>
          </>
          <Box>
            <Ptag className="schedule">예상 커리큘럼</Ptag>
            <Ptag className="discSchedule">
              스터디 설명스터디 설명스터디 설명스터디 설명 스터디 설명스터디
              설명스터디 설명스터디 설명
            </Ptag>
            <Week>
              <img src={WeekNLeft} />
              <Ptag className="weekN">1주차</Ptag>
              <img src={WeekNRight} />
            </Week>
          </Box>

          {hasQuestion ? (
            <Question>
              <BoxQues>
                <p style={{ color: '#368FF7', fontWeight: '600' }}>질문</p>
                <p>리액트를 얼마나 공부하셨나요?</p>
              </BoxQues>
              <Ans placeholder="답변을 적어주세요."></Ans>
            </Question>
          ) : null}

          <Info className={`Info info_${hasQuestion}`}>
            <InfoDetail>
              <img src={ExpectPerson} />
              <p>예상 모집 인원 6명</p>
            </InfoDetail>
            <InfoDetail>온라인</InfoDetail>
          </Info>
          <ApplyButton onClick={onClose}>지원하기</ApplyButton>
        </Content>
      </Modal>
    </>
  );
};
export default ModalApply;

const BoxQues = styled.div`
  width: 348px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #6b6b6b;

  display: flex;

  align-items: center;
  gap: 12px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;

  box-sizing: border-box;
`;

const Question = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Ans = styled.input`
  width: 348px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #6b6b6b;
  box-sizing: border-box;

  &::placeholder {
    color: #6b6b6b;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 85px;
`;

const Ptag = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;

  &.title1 {
    color: #368ff7;
    margin-top: 91px;
  }
  &.discript {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.4px;
    max-width: 350px;
    margin-top: 21px;
    margin-bottom: 37px;
  }
  &.schedule {
    color: #368ff7;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
  }
  &.discSchedule {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.325px;
    max-width: 230px;
  }
  &.weekN {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.325px;
  }
`;

const Box = styled.div`
  width: 348px;
  padding: 16px 0px;
  border-radius: 8px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  text-align: center;

  box-sizing: border-box;
`;

const Week = styled.div`
  display: flex;
  gap: 4px;
`;

const Info = styled.div`
  display: flex;
  gap: 14px;
  &.info_false {
    margin-top: 54px;
  }
  margin: 39px 0px 15px 0px;
`;

const InfoDetail = styled.div`
  color: var(--Component-Default-Sub, #6b6b6b);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.325px;

  padding: 4px 12px;
  display: flex;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid var(--Component-Default-Sub, #6b6b6b);
`;

const ApplyButton = styled.button`
  color: white;
  border-radius: 12px;
  background: var(--Component-Default-Primary, #368ff7);
  text-align: center;

  width: 348px;
  height: 36px;
  padding: 8px 39px;
  border: none;
`;
