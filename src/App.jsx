import './App.css';
import React from 'react';

import AppliedStudyItem from './components_yjin/AppliedStudyItem';
import BigStudyItem from './components_yjin/BigStudyItem';
import IntroduceItem from './components_yjin/IntroduceItem';
import ModalApply from './components_yjin/ModalApply';
import ModalReviewWrite from './components_yjin/ModalReviewWrite';
import ModalReviewers from './components_yjin/ModalReviewers';
import ModalStudyMake from './components_yjin/ModalStudyMake';
import SmallStudyItem from './components_yjin/SmallStudyItem';
import StudyList from './pages_yjin/StudyList';
import NavBar from './components_yjin/NavBar';
import GlobalNavBar from './components_hhhk/GlobalNavBar';

function App() {
  return (
    <>
      <NavBar />
      <StudyList />
    </>
  );
}

export default App;
