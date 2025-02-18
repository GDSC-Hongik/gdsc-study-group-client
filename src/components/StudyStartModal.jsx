import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';

const StudyApplyModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal}>개설하기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Content></Content>
      </Modal>
    </>
  );
};

export default StudyApplyModal;

const Content = styled.div`
  .StudyStartModalContent {
  }
`;

const Button = styled.button``;
