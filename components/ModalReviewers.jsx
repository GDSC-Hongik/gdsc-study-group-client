import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';

const ModalReviewers = () => {
  const [modalIsOpen, setModalOpen] = useState(fasle);

  const OpenModal = () => setModalOpen(true);
  const CloseModal = () => setModalOpen(false);

  return (
    <>
      <Modal isOpen={true} style={customStyles}></Modal>
    </>
  );
};

export default ModalReviewers;

const customStyles = {
  content: {
    width: '1056px',
    height: '1280px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};
