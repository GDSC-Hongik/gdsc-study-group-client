import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../components_yjin/NavBar';
import AppliedStudyItem from '../components_yjin/AppliedStudyItem';
import StudyListArrow from '../assets/studylist-arrow.svg';
import { useState } from 'react';
import baseApi from '../api/baseApi';
import { useEffect } from 'react';

const mocData = [
  {
    id: 1,
    name: '이펙티브 타입스크립트 스터디1',
    description: '스터디 설명',
    requirement: '요구조건',
    question: '질문이 있어요',
    maxParticipants: 6,
    curriculums: [
      {
        week: 0,
        subject: 'string'
      }
    ],
    days: [
      {
        day: '화요일',
        startTime: {
          hour: 19,
          minute: 0,
          second: 0,
          nano: 0
        }
      }
    ],
    studyStatus: 'OFFLINE',
    status: 'PARTICIPANTS'
  },
  {
    id: 1,
    name: '이펙티브 타입스크립트 스터디2',
    description: '스터디 설명2',
    requirement: '요구조건2',
    question: '질문이 있어요2',
    maxParticipants: 6,
    curriculums: [
      {
        week: 0,
        subject: 'string'
      }
    ],
    days: [
      {
        day: '화요일',
        startTime: {
          hour: 19,
          minute: 0,
          second: 0,
          nano: 0
        }
      }
    ],
    studyStatus: 'ONLINE',
    status: 'CANCELED'
  }
];

const convertMocData = apiData => {
  return apiData.map(study => ({
    id: study.id,
    name: study.name,
    description: study.description,
    maxParticipants:
      study.maxParticipants === 0
        ? '제한 없음'
        : `0명/${study.maxParticipants}명`,
    schedule:
      study.studyStatus === 'ONLINE'
        ? '온라인'
        : study.days?.length > 0
          ? study.days.map(d => `${d.day} ${d.startTime.hour}시`).join(',')
          : '일정 없음'
  }));
};

const Home1 = () => {
  const nav = useNavigate();
  const moveStudyList = () => {
    nav('/study-list');
  };
  const [studyList, setStudyList] = useState(mocData); // useState([]) 스터디 목록 상태
  const [status, setStatus] = useState('participants');

  //개설하기 버튼을 눌러서 모달에서 스터디를 생성했을 때 홈페이지에 스터디가 추가된다.
  async function fetchStudyList() {
    try {
      const response = await baseApi.get('/studies'); // 스터디 전체 목록 가져와서 홈페이지에 보여주기
      setStudyList(convertMocData(response.data)); // 변환된 데이터
      alert('스터디 목록을 성공적으로 불러왔습니다.');
    } catch (e) {
      console.error(e);
      alert('스터디 목록을 불러오는데 실패했습니다.');
    }
  }

  useEffect(() => {
    fetchStudyList();
  }, []);

  // 새로운 스터디 추가 함수 -> AppliedStudyItem에 props로 전달
  const addStudy = newStudy => {
    setStudyList(prevStudies => [...prevStudies, newStudy]);
  };

  // 스터디 모집(지원) 상태에 따른 필터링
  // 1. 모집 중인 스터디가 없으면 '개설하기' 스터디 하나만
  // 2. 모집 중인(지원 안한) 스터디가 있으면 '지원하기' 스터디 보여주기
  // 3. 지원 중인 스터디가 있으면  '지원 중..' 스터디 보여주기
  // 4. 지원 완료된 스터디가 있으면 '이동하기' 스터디 보여주기
  async function fetchStudyParticipants() {
    try {
      const response = await baseApi.get(`/studies/${study_id}/participants`);
      setStatus(response.data.status);
      alert('스터디 지원 상태를 성공적으로 불러왔습니다.');
    } catch (e) {
      console.error(e);
      alert('스터디 지원 상태를 불러오는데 실패했습니다.');
    }
  }
  useEffect(() => {
    fetchStudyParticipants();
  }, []);

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
              key={studyItem.id}
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
