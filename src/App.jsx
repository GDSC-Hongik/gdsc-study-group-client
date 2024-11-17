import './App.css';
import React from 'react';
import StudyStatus from './components/StudyStatus';
import SelfIntroduceItem from './components/SelfIntroduceItem';
import StudyItemBig from './components/StudyItemBig';
import StudyItemSmall from './components/StudyItemSmall';

import Home from './pages_hhhk/home';

function App() {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <div>
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

      <div>
        <SelfIntroduceItem
          date="2024. 10. 31."
          todaystudytitle="[1회차] 아이엠그라운드 자기소개 하기"
          studymember="이혁, 강유빈, 김유진, 김태우, 이예은, 정재훈, 천민재"
          views="2,022"
          likes="9"
        />
      </div>

      <div>
        <StudyItemBig
          studyname="이펙티브 타입스크립트 스터디"
          studydetail="타입스크립트를 심화해서 공부하고 공유해요."
          studycurrentTO={5}
          studyMaxTO={6}
        />
      </div>

      <div>
        <StudyItemSmall
          studyname="이펙티브 타입스크립트 스터디"
          studydetail="타입스크립트를 심화해서 공부하고 공유해요."
          studycurrentTO={6}
          studyMaxTO={6}
          studyschedule="조정 예정"
        />

        <StudyItemSmall
          studyname="이펙티브 타입스크립트 스터디"
          studydetail="타입스크립트를 심화해서 공부하고 공유해요."
          studycurrentTO={5}
          studyMaxTO={6}
          studyschedule="화요일 19시"
        />
      </div>
    </div>
  );
}

export default App;
