// 새로운 스터디를 만드는 모달
// [개설하기]/[스터디 생성] 버튼 클릭 시 나온다.

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Modal from 'react-modal';

const ModalStudyMake = ({ isOpen, onClose }) => {
  // 실제 모달 기능 구현 전, 쓰던 모달 상태 관리 변수 / 함수는 제거한다.
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);
  return (
    <>
      {/* isOpen이 true일 때만 이 모달이 열린다. 이 값은 상위 파일에서 props로 전달 */}
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <Content>
          <Title placeholder="스터디명을 입력해주세요." />
          <Flex className="firstFlex">
            <HalfBox className="firstHalfBox">
              <p1>진행 방식</p1>
              <p2>온라인/오프라인 병행</p2>
            </HalfBox>
            <HalfBox className="firstHalfBox">
              <p1>예상 모집 인원</p1>
              <p2>6인</p2>
            </HalfBox>
          </Flex>

          <Box className="firstBox">
            <p1>스터디 설명</p1>

            <p2>.</p2>
          </Box>
          <Flex className="secondFlex">
            <HalfBox>
              <p1>지원 조건</p1>
              <p2>(객관식) 바로 지원, 질문</p2>
            </HalfBox>
            <HalfBox>
              <p1>지원 질문</p1>
              <p2>1. 어떤 공부를 해오셨나요...</p2>
            </HalfBox>
          </Flex>
          <Flex>
            <HalfBox className="option">
              <p1>지원 자격</p1>
              <p2>(선택)</p2>
            </HalfBox>
            <HalfBox className="option">
              <p1>시작 일자</p1>
              <p2>(선택)</p2>
            </HalfBox>
          </Flex>
          <Sylabus>스터디 예상 커리큘럼</Sylabus>

          <Box>
            <p1>1주차</p1>
            <p2>.</p2>
          </Box>
          <Creating onClick={onClose}>생성하기</Creating>
        </Content>
      </Modal>
    </>
  );
};

export default ModalStudyMake;

const commonFont = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const Creating = styled.button`
  width: 348px;
  height: 36px;
  border: none;
  border-radius: 12px;
  background: #368ff7;

  margin-top: 16px;

  color: #fff;
  ${commonFont}
  font-weight: 400;

  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  ${commonFont}
  width: 758px;
  padding: 20px;

  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #555;

  display: flex;
  flex-direction: column;
  gap: 16px;

  &.firstBox {
    margin-bottom: 27px;
  }

  p2 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }
`;

const HalfBox = styled.div`
  ${commonFont}
  min-width: 360px;
  padding: 20px;

  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #555;

  p2 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }

  display: flex;
  flex-direction: column;
  gap: 16px;

  &.firstHalfBox {
    padding: 12px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p2 {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.35px;
      display: flex;
      justify-content: center;
    }
  }

  &.option {
    border: 1px solid #c5c5c5;
    color: #909090;
  }
`;

const Sylabus = styled.p`
  ${commonFont}
  margin: 32px 0px 17px 0px;
`;

const Flex = styled.div`
  display: flex;
  gap: 38px;

  &.firstFlex {
    margin-bottom: 18px;
  }
  &.secondFlex {
    margin-bottom: 29px;
  }
`;

const Title = styled.input`
  width: 758px;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.6px;

  margin: 72px 62px;

  border: none;
  outline: none;
  &::placeholder {
    color: #c2c2c2;
  }
`;

const customStyles = {
  content: {
    width: '1056px',
    height: '880px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};
