import React from 'react';
import styled from '@emotion/styled';
import GrayProfile from '../assets/gray-profile.svg';
import Arrow from '../assets/arrow.svg';

const BigStudyItem = () => {
  return (
    <Box className="box">
      <Content>
        <CircleImg src={GrayProfile}></CircleImg>
        <div>
          <Ptag className="title">이펙티브 타입스크립트 스터디</Ptag>
          <Ptag className="detail">
            타입스크립트를 심화해서 공부하고, 공유해요.
          </Ptag>
        </div>
      </Content>
      <Asking>
        <Ptag className="ask">문의</Ptag>
        <img src={Arrow} style={{ height: '64px', width: '64px' }}></img>
      </Asking>
    </Box>
  );
};

export default BigStudyItem;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Asking = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 27px;
`;

const CircleImg = styled.img`
  height: 128px;
  width: 128px;
  margin: 0px;
  margin-right: 39px;
`;

const Ptag = styled.p`
  margin: 0px;
  padding: 0px;
  &.title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.8px;

    padding: 0px;
    margin-top: 28px;
    margin-bottom: 8px;
  }
  &.detail {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;

    margin: 0px;
    margin-bottom: 30px;
  }
  &.ask {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.8px;

    display: flex;

    flex-direction: column;
    justify-content: center;
  }
`;

const Box = styled.div`
  border: 1px solid #6b6b6b;
  box-sizing: border-box;
  padding: 35.5px 0px 36.5px 40px;

  border-radius: 16px;
  min-height: 200px;
  max-width: 1200px;
  width: 100%;
  background-color: white;

  display: flex;
  justify-content: space-between;
`;
