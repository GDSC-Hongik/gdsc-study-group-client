import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudyList from './pages_yjin/StudyList';
import Home1 from './pages_yjin/Home1';
import Notfound from './pages_yjin/Notfound';

// 로그인 페이지 컴포넌트
import LoginPage from './components/LoginPage'; // 경로에 맞춰 수정
import SignupPage from './components/SignupPage';

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

        {/* 위에 해당되지 않는 모든 경로 -> Notfound */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
