import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../components_yjin/NavBar';
import AppliedStudyItem from '../components_yjin/AppliedStudyItem';
import StudyListArrow from '../assets/studylist-arrow.svg';
import { useState } from 'react';
import baseApi from '../api/baseApi';
import { useEffect } from 'react';
import ModalReviewCreate from '../components_yjin/ModalReviewCreate';

const mocData = [
  {
    id: 1,
    peopleNum: '1명 / 6명',
    schedule: '화요일 19시',
    type: 'GRAY',
    buttonText: '지원 중...',
    existContent: true
  },
  {
    id: 2,
    peopleNum: '제한 없음',
    schedule: '화요일 19시, 수요일 19시',
    type: 'BLUE',
    buttonText: '지원하기',
    existContent: true
  },
  {
    id: 3,
    peopleNum: '',
    schedule: '',
    type: 'BLUE',
    buttonText: '개설하기',
    existContent: false,
    existTitle: false
  }
];

const Home1 = () => {
  const nav = useNavigate();
  const moveStudyList = () => {
    nav('/study-list');
  };
  const [studyCompo, setStudyCompo] = useState(mocData);

  //개설하기 버튼을 눌러서 모달에서 스터디를 생성했을 때 홈페이지에 스터디가 추가된다.
  async function fetchData() {
    try {
      const response = await baseApi.get('/studies'); // 스터디 전체 목록 가져와서 홈페이지에 보여주기
      setStudyCompo(response.data);
      alert('스터디 목록을 성공적으로 불러왔습니다.');
    } catch (e) {
      console.error(e);
      alert('스터디 목록을 불러오는데 실패했습니다.');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // 새 스터디 추가 함수
  // const onStudyCreate = newStudy => {
  //   setStudyCompo(prevStudies => [...prevStudies, newStudy]);
  // };

  return (
    <>
      <NavBar />
      <Container className="content-wrapper">
        <Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p1>스터디</p1>
            <p2>현재 모집 중인 스터디예요.</p2>
          </div>
          <PlusList>
            <Ptag onClick={moveStudyList} className="list">
              스터디 목록
            </Ptag>
            <img src={StudyListArrow}></img>
          </PlusList>
        </Title>

        <FlexStudy>
          {studyCompo.map(studyItem => (
            <AppliedStudyItem
              key={studyItem.id}
              peopleNum={studyItem.peopleNum}
              schedule={studyItem.schedule}
              type={studyItem.type}
              buttonText={studyItem.buttonText}
              existContent={studyItem.existContent}
              existTitle={studyItem.existTitle}
            />
          ))}
        </FlexStudy>

        <FlexStudy>
          <AppliedStudyItem
            peopleNum={'1명 / 6명'}
            schedule={'화요일 19시'}
            type={'GRAY'}
            buttonText={'지원 중...'}
            existContent={true}
          />
          <AppliedStudyItem
            peopleNum={'제한 없음'}
            schedule={'화요일 19시, 수요일 19시'}
            type={'BLUE'}
            buttonText={'지원하기'}
            existContent={true}
          />
          <AppliedStudyItem
            peopleNum={''}
            schedule={''}
            type={'BLUE'}
            buttonText={'개설하기'}
            existTitle={false}
          />
        </FlexStudy>
        <Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <p1>활동 히스토리</p1>
            <p2>다른 스터디들의 후기를 확인해요.</p2>
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
  color: #368ff7;
  &.list {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;

    cursor: pointer;
  }
`;

const Title = styled.p`
  margin: 70px 0px 45px 0px;

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
