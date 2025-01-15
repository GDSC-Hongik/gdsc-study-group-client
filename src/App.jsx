import AppliedStudyItem from '../components/AppliedStudyItem';
import BigStudyItem from '../components/BigStudyItem';
import IntroduceItem from '../components/IntroduceItem';
import SmallStudyItem from '../components/SmallStudyItem';
import './App.css';
import ModalReviewWrite from '../components/ModalReviewWrite';
import React from 'react';
import ModalReviewers from '../components/ModalReviewers';
import ModalApply from '../components/ModalApply';

function App() {
  return (
    <>
      <ModalApply exist={false} />
      <ModalApply exist={true} />
    </>
  );
}

export default App;
