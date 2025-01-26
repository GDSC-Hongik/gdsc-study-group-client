import styled from '@emotion/styled';
import SmallStudyItem from '../components_yjin/SmallStudyItem';
import { css } from '@emotion/css';
import { useState } from 'react';
import DropdownComponent from '../components_yjin/DropdownComponent';
import NavBar from '../components_yjin/NavBar';
import ModalStudyMake from '../components_yjin/ModalStudyMake';

const StudyList = () => {
  // 모달보다 상위 파일인 이 StudyList에서 모달의 여닫힘 상태를 관리한다.
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const openButtonClick = () => {
    setIsModalOpen(true); // 모달 열기
  };
  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };
  return (
    <>
      <NavBar />
      <Container className="content-wrapper">
        <Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p1>스터디 목록</p1>
            <p2>현재 진행 중이거나 모집 중인 스터디예요.</p2>
          </div>
          <Buttons>
            <DropdownComponent />
            {/* 버튼 박스를 그냥 만들고 이 박스를 클릭하면 모달이 열림 상태가 되도록 (isModalOpen가 true)한다. */}
            <MakeStudyButton onClick={openButtonClick}>
              스터디 생성
            </MakeStudyButton>
            {/* isModalOpen 이 true이면, 아래 모달 컴포넌트가 열리도록 설정  */}
            <ModalStudyMake isOpen={isModalOpen} onClose={closeModal} />
          </Buttons>
        </Title>
        <List>
          <ListFlex>
            <SmallStudyItem
              text1={'6 / 6'}
              text2={'조정 예정'}
              type={'GREEN'}
            />
            <SmallStudyItem
              text1={'5 / 6'}
              text2={'화요일 19시'}
              type={'BLUE'}
            />
          </ListFlex>
          <ListFlex>
            <SmallStudyItem
              text1={'6 / 6'}
              text2={'조정 예정'}
              type={'GREEN'}
            />
            <SmallStudyItem
              text1={'5 / 6'}
              text2={'화요일 19시'}
              type={'BLUE'}
            />
          </ListFlex>
          <ListFlex>
            <SmallStudyItem
              text1={'6 / 6'}
              text2={'조정 예정'}
              type={'GREEN'}
            />
            <SmallStudyItem
              text1={'5 / 6'}
              text2={'화요일 19시'}
              type={'BLUE'}
            />
          </ListFlex>
        </List>
      </Container>
    </>
  );
};
export default StudyList;

const MakeStudyButton = styled.button`
  width: 175px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;
  background: var(--Component-Default-Primary, #368ff7);

  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const Container = styled.div`
  background-color: #ffffff;

  width: 1200px; /* 최대 너비 */
  height: 100vh;
`;

const commonFont = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 30px;
`;

const ListFlex = styled.div`
  display: flex;
  gap: 30px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Title = styled.p`
  margin: 70px 0px;

  font-style: normal;
  font-weight: 400;
  line-height: normal;
  p1 {
    font-size: 24px;
    letter-spacing: -0.6px;
  }
  p2 {
    color: #6b6b6b;
    font-size: 16px;
    letter-spacing: -0.4px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* div 높이 크기 내에서 맨 아래 붙게 위치하도록 한다. */
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
