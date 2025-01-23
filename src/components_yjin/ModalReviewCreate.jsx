import Modal from 'react-modal';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';
import TopLine from './TopLine';

//Modal.setAppElement('#root');

const ModalReviewCreate = () => {
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
        <TopLine exist={false} />
        <Content>
          <Title placeholder="제목을 입력해주세요."></Title>
          <TwoBoxes>
            <InBox>모임 방식</InBox>
            <InBox>참여 인원</InBox>
          </TwoBoxes>
          <LineBox />
          <WriteBox>
            <WriteTitle>학습 목표를 작성해주세요.</WriteTitle>
            <WriteContent>
              프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이
              자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기
              위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리
              인듯 합니다.
            </WriteContent>
          </WriteBox>
          <WriteBox>
            <WriteTitle>학습 내용을 작성해주세요. (200자 이상)</WriteTitle>
            <WriteContent>
              프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이
              자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기
              위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리
              인듯 합니다. 학습 내용은 200자 이상이기에 우선 더 작성해봤습니다.
              실제로는 더 길 것으로 예상됩니다.
            </WriteContent>
          </WriteBox>
        </Content>
      </Modal>
    </>
  );
};

export default ModalReviewCreate;

const WriteTitle = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;

  margin: 0px;
  margin-bottom: 16px;
  padding: 0px;
`;

const WriteContent = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;

  margin: 0px;
  padding: 0px;
`;

const WriteBox = styled.div`
  width: 758px;
  padding: 20px;
  margin-bottom: 24px;

  box-sizing: border-box;

  border-radius: 16px;
  border: 1px solid #555;
  background: var(--Background-Normal, #fff);
`;

const LineBox = styled.div`
  width: 758px;
  height: 1px;
  background-color: #c2c2c2;

  margin-bottom: 24px;
`;

const Content = styled.div`
  margin: 0px;
  padding: 40px 149px;
`;
const TwoBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const InBox = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.6px;

  background-color: #d9d9d9;
  box-sizing: border-box;
  width: 360px;
  height: 50px;
  padding: 9px 0px 12px 20px;
`;

const TitleSharedStyle = css`
  /*Title의 공통 스타일 */
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.6px;
`;

const Title = styled.input`
  ${TitleSharedStyle} /*공통 스타일 적용 */
  margin: 0px;
  margin-bottom: 26px;
  padding: 0px;
  border: none;
  outline: none;
  &::placeholder {
    ${TitleSharedStyle}
    color: #c2c2c2;
  }
`;

const customStyles = {
  content: {
    /* 스크롤바 없애기 */
    overflow: 'hidden',
    /*모달이 화면 중앙에 오도록 설정 */
    width: '1056px',
    height: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',

    backgroundColor: 'white',
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',

    borderRadius: '8px',
    boxShadow: '0px 4px 8px 0px var(--Effect-Shadow-M, rgba(0, 0, 0, 0.20))'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};
