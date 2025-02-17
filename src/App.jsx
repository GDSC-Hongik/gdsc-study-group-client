import './App.css';
import React, { useState } from 'react';
import StudyPage from './pages/StudyPage';
import StudyApplyeeStatus from './components/StudyApplyeeStatus';
import StudyApplierStatus from './components/StudyApplierStatus';
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

// 새로 만든 로그인 페이지 컴포넌트
import LoginPage from './pages/LoginPage'; // 경로에 맞게 수정하세요
import SignupPage from './pages/SignupPage';

function App() {
  const [view, setView] = useState('');

  return (
    <Router>
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

        {/* 추가: 로그인 페이지 보기 버튼 */}
        <button onClick={() => setView('login')}>로그인 페이지</button>

        {/* 메인 콘텐츠 */}
        {view === 'manager' && <StudyPage userRole="manager" />}
        {view === 'member' && <StudyPage userRole="member" />}
        {view === 'applyeeStatus' && <StudyApplyeeStatus />}
        {view === 'applierStatus' && <StudyApplierStatus />}

        {/* 추가: 로그인 페이지 렌더링 */}
        {view === 'login' && <LoginPage />}
        {view === 'signup' && <SignupPage />}
      </div>
    </Router>
  );
}

export default App;
