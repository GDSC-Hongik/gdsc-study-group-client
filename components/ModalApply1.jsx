import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import WeekNLeft from '../src/assets/weekN-left.svg';
import WeekNRight from '../src/assets/weekN-right.svg';

const ModalApply1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Apply1</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
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
          <Info>
            <InfoDetail>예상 모집 인원 6명</InfoDetail>
            <InfoDetail>온라인</InfoDetail>
          </Info>
          <ApplyButton>지원하기</ApplyButton>
        </Content>
      </Modal>
    </>
  );
};
export default ModalApply1;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const customStyles = {
  content: {
    margin: '0px',
    padding: '0px',
    width: '1056px',
    height: '600px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};

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
  margin: 24px 0px 15px 0px;
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
