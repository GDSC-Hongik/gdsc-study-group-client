import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudyList from './pages_yjin/StudyList';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/study-list" element={<StudyList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
