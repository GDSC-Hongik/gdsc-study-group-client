import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import Titlebar from './Titlebar';

const StudyApplyModal = ({ studyname, studyrequirements }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal}>신청하기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Titlebar exist={false} />
        <Content>
          <div className="StudyApplyModalContent">
            <div className="title">
              <div className="titlestudyname">{studyname}</div>
              <div className="applycopy">지원하시겠습니까?</div>
            </div>
            <div className="textbook">[교재 사진/이름]</div>
            <div className="requirements"></div>
            <div className="requirementstitle">지원 자격</div>
            <div className="requirementscontent">{studyrequirements}</div>
            <Button className="button">지원하기</Button>
          </div>
        </Content>
      </Modal>
    </>
  );
};

export default StudyApplyModal;

const Content = styled.div`
  .StudyApplyModalContent {
    .requirementscontent {
      white-space: pre-line;
    }
  }
`;

const Button = styled.button``;

//requirementscontent에서 white-space: pre-line;
