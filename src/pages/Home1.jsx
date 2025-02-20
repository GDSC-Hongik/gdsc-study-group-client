import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components_yjin/NavBar';
import AppliedStudyItem from '../components_yjin/AppliedStudyItem';
import StudyListArrow from '../assets/studylist-arrow.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { mocData } from '../../data/studyData';

import { fetchStudyList, fetchStudyParticipants } from '../api/studyItem';

// const convertMocData = apiData => {
//   return apiData.map(study => ({
//     id: study.id,
//     name: study.name,
//     description: study.description,
//     maxParticipants:
//       study.maxParticipants === 0
//         ? '제한 없음'
//         : `0명/${study.maxParticipants}명`,
//     schedule:
//       study.studyStatus === 'ONLINE'
//         ? '온라인'
//         : study.days?.length > 0
//           ? study.days.map(d => `${d.day} ${d.startTime.hour}시`).join(',')
//           : '일정 없음'
//   }));
// };

const Home1 = () => {
  const nav = useNavigate();
  const moveStudyList = () => {
    nav('/study-list');
  };
  const [studyList, setStudyList] = useState(mocData); // useState([]) 스터디 목록 상태
  const [status, setStatus] = useState('PARTICIPANTS');
  const [studyId, setStudyId] = useState(0);

  useEffect(() => {
    fetchStudyList(setStudyList);
    fetchStudyParticipants(studyId, setStatus);
  }, []);

  // 새로운 스터디 추가 함수 -> AppliedStudyItem에 props로 전달
  const addStudy = newStudy => {
    setStudyList(prevStudies => [...prevStudies, newStudy]);
  };

  return (
    <>
      <NavBar />
      <Container className="content-wrapper">
        <Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Ptag className="studyTitle">스터디</Ptag>
            <Ptag className="studyDiscript">현재 모집 중인 스터디예요.</Ptag>
          </div>
          <PlusList>
            <Ptag onClick={moveStudyList} className="list">
              스터디 목록
            </Ptag>
            <img src={StudyListArrow}></img>
          </PlusList>
        </Title>

        <FlexStudy>
          {studyList.slice(-3).map(studyItem => (
            <AppliedStudyItem
              key={studyItem.studyId}
              name={studyItem.name}
              description={studyItem.description}
              maxParticipants={studyItem.maxParticipants}
              schedule={studyItem.schedule}
              status={studyItem.status}
              addStudy={addStudy}
            />
          ))}
        </FlexStudy>

        <Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Ptag className="studyTitle">활동 히스토리</Ptag>
            <Ptag className="studyDiscript">
              다른 스터디들의 후기를 확인해요.
            </Ptag>
          </div>
        </Title>
        <Activity></Activity>
      </Container>
    </>
  );
};

export default Home1;

const PlusList = styled.div`
  display: flex;
  gap: 10px;
`;

const Activity = styled.div`
  width: 1200px;
  height: 452px;
  background: #d9d9d9;
`;

const FlexStudy = styled.div`
  display: flex;
  gap: 30px;
`;

const Container = styled.div`
  background-color: #ffffff;

  width: 1200px; /* 최대 너비 */
  height: 100vh;
`;

const Ptag = styled.p`
  font-style: normal;
  line-height: normal;
  &.list {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
    color: #368ff7;

    cursor: pointer;
  }
  &.studyTitle {
    font-size: 24px;
    letter-spacing: -0.6px;
  }
  &.studyDiscript {
    color: #6b6b6b;
    font-size: 16px;
    letter-spacing: -0.4px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* div 높이 크기 내에서 맨 아래 붙게 위치하도록 한다. */
  }
`;

const Title = styled.p`
  margin: 70px 0px 45px 0px;

  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
