import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudyList from './pages/StudyList';
import Home1 from './pages/Home1';
import Notfound from './pages/Notfound';

// 로그인 페이지 컴포넌트
import LoginPage from './pages/LoginPage'; // 경로에 맞춰 수정
import SignupPage from './pages/SignupPage';
import StudyApplyeeStatusPage from './pages/StudyApplyeeStatusPage';
import StudyApplierStatusPage from './pages/StudyApplierStatusPage';
import StudyPage from './pages/StudyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home1 />} />

        {/* 스터디 리스트 페이지 */}
        <Route path="/study-list" element={<StudyList />} />

        {/* 로그인 페이지 추가 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 회원가입 페이지 추가 */}
        <Route path="/signup" element={<SignupPage />} />

        {/* 지원자현황 페이지 추가 */}
        <Route path="/applyeestatus" element={<StudyApplyeeStatusPage />} />

        {/* 지원상태확인 페이지 추가 */}
        <Route path="/applierstatus" element={<StudyApplierStatusPage />} />

        {/* 스터디 페이지 */}
        <Route path="/study" element={<StudyPage />} />

        {/* 위에 해당되지 않는 모든 경로 -> Notfound */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
