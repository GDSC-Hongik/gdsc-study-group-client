import React from 'react';
import styled from '@emotion/styled';
import GrayProfile from '../assets/gray-profile.svg';
import SmallArrow from '../assets/small-arrow.svg';
import StudyTwoImages from './StudyTwoImages';

const SmallStudyItem = ({ text1, text2, type }) => {
  return (
    <Box>
      <Content>
        <CircleImg src={GrayProfile} />
        <div>
          <Ptag className="title">이펙티브 타입스크립트 스터디</Ptag>
          <Ptag className="detail">
            타입스크립트를 심화해서 공부하고, 공유해요.
          </Ptag>
          <StudyTwoImages text1={text1} text2={text2} type={type} />
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
  margin: 0px;
  margin-right: 20px;
`;

const Content = styled.div`
  display: flex;
`;

const Box = styled.div`
  border: 1px solid #6b6b6b;
  background-color: white;

  padding: 0px;
  width: 585px;
  min-height: 176px;
  border-radius: 16px;

  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;
const CircleImg = styled.img`
  height: 80px;
  width: 80px;
  margin: 18px 20px 0px 20px;
`;
const Ptag = styled.p`
  font-style: normal;
  line-height: normal;
  & * {
    font-style: normal;
    line-height: normal;
  }
  &.title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.6px;

    margin-bottom: 4px;
    margin-top: 32px;
  }
  &.detail {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.4px;

    margin: 0px;
  }
`;
