import styled from '@emotion/styled';
import React from 'react';
import heart from '../src/assets/heart.svg';

const Introduce = () => {
  return (
    <Box>
      <Ptag className="date">2024.10.31.</Ptag>
      <Ptag className="title">[1회차] 아이엠 그라운드 자기소개 하기</Ptag>
      <Alignss1>
        <Ptag className="names">
          이혁, 강유빈, 김유진, 김태우, 이예은, 정재훈, 천민재
        </Ptag>
        <Alignss2>
          <Ptag className="count">조회수 2022</Ptag>
          <Ptag className="heart">
            <img src={heart} />
            <p>9</p>
          </Ptag>
        </Alignss2>
      </Alignss1>
    </Box>
  );
};

export default Introduce;

const Alignss1 = styled.div`
  display: flex;
  align-item: center;
  margin: 0px;
  justify-content: space-between;
`;

const Alignss2 = styled.div`
  display: flex;
  align-item: center;
  margin: 0px;
  gap: 16px;
`;

const Ptag = styled.p`
  &.date {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #6b6b6b;
    margin: 0px 0px 13px;
  }
  &.title {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin: 0px 0px 14px 0px;
  }
  &.names {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
  }
  &.count {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    margin: 0px;
  }
  &.heart {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 16px;
    margin: 0px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Box = styled.div`
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  padding: 20px;
  min-height: 134px;
  max-width: 790px;
  background-color: white;
`;
