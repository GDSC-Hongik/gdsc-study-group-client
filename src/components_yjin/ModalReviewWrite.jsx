// 1. 후기 작성하기 모달

import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import TopLine from './TopLine';
import GrayArrLeft from '../assets/gray-arrow-left.svg';
import GrayArrRight from '../assets/gray-arrow-right.svg';

import ReviewItem from './ReviewItem';
import ReviewStudyInfo from './ReviewStudyInfo';
import WritingReviews from './WritingReviews';

const studyGoalGontent =
  '프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이 자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기 위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리 인듯 합니다.';
const studyContent =
  '프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이 자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기 위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리 인듯 합니다. 학습 내용은 200자 이상이기에 우선 더 작성해봤습니다. 실제로는 더 길 것으로 예상됩니다.';

const ModalReviewWrite = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Modal Open</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <TopLine exist={true} />
        <EnContent>
          <ArrImg src={GrayArrLeft}></ArrImg>
          <Content>
            <Ptag className="Title">[1회차] 아이엠그라운드 자기소개하기</Ptag>

            <ReviewStudyInfo />

            <PictureBox />
            <TwoGroup>
              <GoalBox>
                <Ptag className="bold">학습 목표</Ptag>
                <Ptag className="goaltxt">{studyGoalGontent}</Ptag>
              </GoalBox>
              <GoalBox>
                <Ptag className="bold">학습 내용</Ptag>
                <Ptag className="goaltxt">{studyContent}</Ptag>
              </GoalBox>
            </TwoGroup>

            <WritingReviews />
          </Content>

          <ArrImg src={GrayArrRight}></ArrImg>
        </EnContent>
      </Modal>
    </>
  );
};

export default ModalReviewWrite;

const GoalBox = styled.div`
  width: 369px;
  padding: 20px;

  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #555;
  background: #fff;
`;

const TwoGroup = styled.div`
  margin-top: 24px;
  margin-bottom: 31px;
  display: flex;
  gap: 20px;
`;

const PictureBox = styled.div`
  width: 758px;
  height: 204px;
  margin: 24px 0;
  background-color: #d9d9d9;
`;

const ArrImg = styled.img`
  margin-bottom: 690px; /**수정 필요 */
`;

const EnContent = styled.div`
  display: flex;
  gap: 61px;
  justify-content: center;
`;

const Content = styled.div`
  margin: 0px;
  padding: 0px;
  width: 758px;
`;

const Ptag = styled.p`
  /*공통 속성 정의 */
  color: #000;
  font-style: normal;
  line-height: normal;
  & * {
    /* 내부의 모든 자식 요소 */
    color: #000;
    font-style: normal;
    line-height: normal;
  }
  &.Title {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.6px;

    margin-top: 80px;
  }

  &.bold {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;
  }
  &.goaltxt {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;

    margin-top: 16px;
  }

  &.comTitle {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  &.comTxt {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.5px;

    margin: 24px 0px;
  }
`;

const customStyles = {
  content: {
    overflowX: 'hidden',
    overflowY: 'auto',
    margin: '0px',
    padding: '0px',
    width: '1056px',
    height: '1100px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};
