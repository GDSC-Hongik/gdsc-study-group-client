// SmallStudyItem 에 쓰이는 두 이미지 (인원 수, 일정) 컴포넌트
// 인원 마감이면 초록색,
// 인원 미달이면 파란색

import React from 'react';
import styled from '@emotion/styled';
import GreenPerson from '../assets/green-person.svg';
import BluePerson from '../assets/blue-person.svg';
import GrayClock from '../assets/gray-clock.svg';

const StudyTwoImages = ({ peopleNum, schedule, type }) => {
  let pimg;
  if (type === 'GREEN') {
    pimg = GreenPerson;
  } else if (type === 'BLUE') {
    pimg = BluePerson;
  }

  return (
    <ContentImg>
      <PersonImg src={pimg}></PersonImg>
      <Ptag className={`count count_${type}`}>{peopleNum}</Ptag>
      <img src={GrayClock} style={{ width: '32px', height: '32px' }}></img>
      <Ptag className="clockInfo">{schedule}</Ptag>
    </ContentImg>
  );
};

export default StudyTwoImages;

const PersonImg = styled.img`
  width: 32px;
  height: 32px;
`;

const ContentImg = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  margin-top: 28px;
  img,
  .count,
  .clockInfo {
    margin-top: 0px;
    margin-bottom: 32px;
  }
`;
const Ptag = styled.p`
  &.count {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.6px;
    margin-left: 12px;
    margin-right: 32px;
  }
  &.count_GREEN {
    color: #34a853;
  }
  &.count_BLUE {
    color: #368ff7;
  }
  &.clockInfo {
    color: #6b6b6b;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    margin-left: 11px;
  }
`;
