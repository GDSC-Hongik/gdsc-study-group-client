import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudyList from './pages/StudyList';
import Home1 from './pages/Home1';
import Notfound from './pages/Notfound';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/study-list" element={<StudyList />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
