import AppliedStudyItem from '../components/AppliedStudyItem';
import BigStudyItem from '../components/BigStudyItem';
import IntroduceItem from '../components/IntroduceItem';
import SmallStudyItem from '../components/SmallStudyItem';
import './App.css';
import ModalReviewWrite from '../components/ModalReviewWrite';
import React from 'react';
import ModalReviewers from '../components/ModalReviewers';
import { useState } from 'react';
import StudyPage from '../src/components/StudyPage';
import StudyApplyeeStatus from '../src/components/StudyApplyeeStatus';
import StudyApplierStatus from '../src/components/StudyApplierStatus';

function App() {
  const [view, setView] = useState('');

  return (
    <div>
      <h1>UI 테스트</h1>

      <button onClick={() => setView('manager')}>스터디장 페이지</button>
      <button onClick={() => setView('member')}>스터디원 페이지</button>
      <button onClick={() => setView('applyeeStatus')}>지원현황 페이지</button>
      <button onClick={() => setView('applierStatus')}>
        지원상태확인 페이지
      </button>

      {view === 'manager' && <StudyPage userRole="manager" />}
      {view === 'member' && <StudyPage userRole="member" />}
      {view === 'applyeeStatus' && <StudyApplyeeStatus />}
      {view === 'applierStatus' && <StudyApplierStatus />}
    </div>
  );
}

export default App;
