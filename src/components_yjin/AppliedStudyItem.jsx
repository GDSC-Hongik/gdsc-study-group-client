// 메인 페이지에 쓰이는 스터디 아이템 컴포넌트
// 모집 중인 스터디 -> 지원하기
// 지원 중인 스터디 -> 지원 중...
// 가입한 그터디 -> 이동하기
// 모집 중인 스터디가 없을 경우 -> 개설하기

import styled from '@emotion/styled';
import ModalApply from './ModalApply';
import GrayProfile from '../assets/gray-profile.svg';
import NoStudy from '../assets/no-study.svg';
import ModalStudyMake from './ModalStudyMake';
import { useState } from 'react';

const AppliedStudyItem = ({
  peopleNum,
  schedule,
  type, // BLUE: 아직 지원 가능, //GREEN: 지원 마감
  buttonText,
  existContent = false, // 내용 존재 여부
  existTitle = true // 제목 존재 여부
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리 _ 열기 / 닫기
  const [modalType, setModalType] = useState(null); // 어떤 모달인지 구분

  // 버튼이 '지원하기'인지 '개설하기'인지에 따라 어떤 모달을 보여줄지를 결정하는 모달 타입 setModalType
  const handleButtonClick = () => {
    if (buttonText === '지원하기') {
      setModalType('apply');
    } else if (buttonText === '개설하기') {
      setModalType('make');
    }
    setIsModalOpen(true); // 모달 열기
  };

  // 하위 모달 컴포넌트에 props로 전달해주는 역할
  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setModalType(null);
  };

  return (
    <Box>
      {existTitle === true && (
        <Content>
          <CircleImg
            src={GrayProfile}
            style={{ width: '48px', height: '48px' }}
          ></CircleImg>
          <div>
            <Ptag className="title">이펙티브 타입스크립트 스터디</Ptag>
            <Ptag className="detail">타입스크립트를 심화해서 공부해요.</Ptag>
          </div>
        </Content>
      )}

      {existContent === true && (
        <ContentDetail>
          <li>
            모집 인원 &nbsp; <span className="bold">{peopleNum}</span>
          </li>
          <li>
            스터디 일정 &nbsp; <span className="bold">{schedule}</span>
          </li>
        </ContentDetail>
      )}

      {existTitle === false && (
        <NoStudyImg>
          <img src={NoStudy} />
          <Ptag className="noStudyment">현재 모집 중인 스터디가 없어요.</Ptag>
        </NoStudyImg>
      )}

      <ButtonDiv>
        <Button onClick={handleButtonClick} className={`Button button_${type}`}>
          {buttonText}
        </Button>
      </ButtonDiv>
      {/* '개설하기' 또는 '지원하기' 클릭 시, 모달 랜더링 */}
      {modalType === 'apply' && (
        <ModalApply
          isOpen={isModalOpen}
          onClose={closeModal}
          hasQuestion={false}
        />
      )}
      {modalType === 'make' && (
        <ModalStudyMake isOpen={isModalOpen} onClose={closeModal} />
      )}
    </Box>
  );
};

export default AppliedStudyItem;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const Button = styled.button`
  width: 348px;
  height: 36px;
  padding: 8px 39px;
  border-radius: 12px;
  border: none;
  margin-bottom: 16px;

  &.button_BLUE {
    background-color: #368ff7;
    cursor: pointer;
  }
  &.button_GREEN {
    background-color: #34a853;
    cursor: pointer;
  }
  &.button_GRAY {
    background-color: #6b6b6b;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const NoStudyImg = styled.div`
  margin-top: 30px;
  margin-left: 51px;
  display: flex;
  gap: 42px;
  align-items: center;
`;

const ContentDetail = styled.ul`
  padding: 0px;
  margin-top: 12px;
  margin-left: 87.5px;
  margin-bottom: 10px;

  list-style-type: disc; /* 기본 불릿 표시*/

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;

  li {
    margin-bottom: 14px;
  }
  li::marker {
    font-size: 10px;
  }
  .bold {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

const CircleImg = styled.img`
  margin-right: 24px;
  margin-left: 16px;
`;

const Content = styled.div`
  margin-top: 16px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6b6b6b;

  background-color: white;
  width: 380px;
  min-height: 200px;
  border-radius: 16px;
`;
const Ptag = styled.p`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  &.title {
    font-weight: 700;
    letter-spacing: -0.4px;

    margin: 0px;
    margin-bottom: 4px;
  }
  &.detail {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;

    margin: 0px;
  }
  &.noStudyment {
    color: #6b6b6b;
    font-weight: 700;
    line-height: 200%;
    letter-spacing: -0.4px;

    max-width: 120px;
  }
`;
