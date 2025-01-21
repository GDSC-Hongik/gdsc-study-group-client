import styled from '@emotion/styled';
import AppliedStudyItem from '../components_yjin/AppliedStudyItem';
import SmallStudyItem from '../components_yjin/SmallStudyItem';
import GlobalNavBar from '../components_hhhk/GlobalNavBar';
import { css } from '@emotion/css';
import DropdownComponent from '../components_yjin/DropdownComponent';

const StudyList = () => {
  return (
    <>
      <Container className="content-wrapper">
        <Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p1>스터디 목록</p1>
            <p2>현재 진행 중이거나 모집 중인 스터디예요.</p2>
          </div>
          <Buttons>
            <DropdownComponent />
            <CreateButton>스터디 생성</CreateButton>
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

const CreateButton = styled.button`
  width: 175px;
  height: 36px;
  padding: 8px 39px;

  border: none;
  border-radius: 8px;
  background: #368ff7;

  color: #fff;
  ${commonFont}
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
