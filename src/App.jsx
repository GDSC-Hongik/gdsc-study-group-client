import './App.css';
import React from 'react';
import StudyStatus from './components/StudyStatus';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      {/* 각 상태에 따른 뷰 렌더링 */}
      <StudyStatus
        studyname="이펙티브 타입스크립트 스터디"
        studydetail="타입스크립트를 심화해서 공부해요. 만약 글이 길 ..."
        //studycurrentTO={5}
        //studyMaxTO={10}
        //studyschedule="매주 수요일 오후 7시"
        buttontext="이동하기"
        status="applied"
      />

      <StudyStatus
        studyname="이펙티브 타입스크립트 스터디"
        studydetail="타입스크립트를 심화해서 공부해요. 만약 글이 길 ..."
        studycurrentTO={1}
        studyMaxTO={6}
        studyschedule="화요일 19시"
        buttontext="신청하기"
        status="applying"
      />

      <StudyStatus
        //studyname=""
        //studydetail=""
        //studycurrentTO={0}
        //studyMaxTO={0}
        //studyschedule=""
        buttontext="개설하기"
        status="empty"
      />
    </div>
  );
}

export default App;
