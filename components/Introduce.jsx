import styled from '@emotion/styled';
import React from 'react';

const Introduce = () => {
  return (
    <Box>
      <Ptag className="date">2024.10.31</Ptag>
      <Ptag className="title">[1회차] 아이엠 그라운드 자기소개 하기</Ptag>
      <Ptag className="names">
        이혁, 강유빈, 김유진, 김태우, 이예은, 정재훈, 천민재
      </Ptag>
    </Box>
  );
};

export default Introduce;

const Ptag = styled.p`
  &.date {
    font-size: 16px;
    color: #6b6b6b;
    margin: 0px 0px 20px;
  }
  &.title {
    font-size: 24px;
  }
  &.names {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

const Box = styled.div`
  border: none;
  border-radius: 8px;
  background-color: gray;
  padding: 20px;
  height: 134px;
  width: 790px;
  box-sizing: border-box;
`;
