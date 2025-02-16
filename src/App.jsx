import './App.css';
import React from 'react';
import { useState } from 'react';
import StudyPage from '../src/components/StudyPage';
import StudyApplyeeStatus from '../src/components/StudyApplyeeStatus';
import StudyApplierStatus from '../src/components/StudyApplierStatus';
//import ModalReviewers from '../components/ModalReviewers';
import AppliedStudyItem from './components_yjin/AppliedStudyItem';
import BigStudyItem from './components_yjin/BigStudyItem';
import IntroduceItem from './components_yjin/IntroduceItem';
import ModalApply from './components_yjin/ModalApply';
import ModalReviewCreate from './components_yjin/ModalReviewCreate';
import ModalReviewers from './components_yjin/ModalReviewers';
import ModalStudyMake from './components_yjin/ModalStudyMake';
import SmallStudyItem from './components_yjin/SmallStudyItem';
import StudyList from './pages_yjin/StudyList';
import NavBar from './components_yjin/NavBar';
import GlobalNavBar from './components_hhhk/GlobalNavBar';
import ModalReviewWrite from './components_yjin/ModalReviewWrite';
import Router from './router';
import Home1 from './pages_yjin/Home1';

function App() {
  const [view, setView] = useState('');

  return (
    <>
      {/* 헤더(고정) */}
      <NavBar />

      {/* 헤더 높이만큼 아래로 공간 확보 */}
      <div style={{ marginTop: '286px' }}>
        <h1>UI 테스트</h1>
        <button onClick={() => setView('manager')}>스터디장 페이지</button>
        <button onClick={() => setView('member')}>스터디원 페이지</button>
        <button onClick={() => setView('applyeeStatus')}>
          지원현황 페이지
        </button>
        <button onClick={() => setView('applierStatus')}>
          지원상태확인 페이지
        </button>

        {/* 메인 콘텐츠 */}
        {view === 'manager' && <StudyPage userRole="manager" />}
        {view === 'member' && <StudyPage userRole="member" />}
        {view === 'applyeeStatus' && <StudyApplyeeStatus />}
        {view === 'applierStatus' && <StudyApplierStatus />}
      </div>
    </>
  );
}

export default App;
