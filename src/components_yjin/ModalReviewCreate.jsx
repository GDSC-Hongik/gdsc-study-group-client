// 스터디 회고를 생성하는 모달
// 모임 방식과 참여 인원,
// 학습 목표와 학습 내용을 작성해야함.

import Modal from 'react-modal';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';
import { handleResizeHeight } from '../styles/ExportStyles';

import TopLine from './TopLine';

//Modal.setAppElement('#root');

const ModalReviewCreate = ({ isOpen, onRequestClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
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
            <WriteContent
              onInput={handleResizeHeight}
              placeholder="학습 목표가 무엇인가요 ?"
            ></WriteContent>
          </WriteBox>
          <WriteBox>
            <WriteTitle>학습 내용을 작성해주세요. (200자 이상)</WriteTitle>
            <WriteContent
              onInput={handleResizeHeight}
              placeholder="무엇을 배우셨나요 ?"
            ></WriteContent>
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

const WriteContent = styled.textarea`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  &::placeholder {
    color: #b3b3b3;
  }

  margin: 0px;
  padding: 0px;

  width: 100%;
  min-height: 60px;
  resize: vertical;

  box-sizing: border-box;
  border: none;

  &:focus {
    outline: none; /* 글을 쓸 때 기본 outline 제거 */
  }
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
  width: 758px;
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
    /* 좌우 스크롤바 없애기 */
    overflowX: 'hidden',
    /*모달이 화면 중앙에 오도록 설정 */
    width: '1056px',
    height: '650px',
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
