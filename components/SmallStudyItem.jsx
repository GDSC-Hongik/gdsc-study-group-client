import React from 'react';
import styled from '@emotion/styled';
import GrayProfile from '../src/assets/gray-profile.svg';
import SmallArrow from '../src/assets/small-arrow.svg';
import StudyTwoImages from './StudyTwoImages';

const SmallStudyItem = () => {
  return (
    <Box>
      <Content>
        <CircleImg src={GrayProfile} />
        <div>
          <Ptag className="title">이펙티브 타입스크립트 스터디</Ptag>
          <Ptag className="detail">
            타입스크립트를 심화해서 공부하고, 공유해요.
          </Ptag>
          <StudyTwoImages text1={'6 / 6'} text2={'조정 예정'} type={'GREEN'} />
        </div>
      </Content>
      <ArrowImg>
        <img src={SmallArrow}></img>
      </ArrowImg>
    </Box>
  );
};
export default SmallStudyItem;

const ArrowImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 128px;
`;

const Content = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: white;
  box-sizing: border-box;
  padding: 0px;
  max-width: 585px;
  min-height: 176px;
  border-radius: 16px;

  display: flex;
`;
const CircleImg = styled.img`
  height: 80px;
  weight: 80px;
  margin: 18px 20px 0px 20px;
`;
const Ptag = styled.p`
  &.title {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.6px;
    margin-bottom: 4px;
    margin-top: 32px;
  }
  &.detail {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.4px;
    margin: 0px;
  }
`;
