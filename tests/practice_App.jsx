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

function App() {
  return (
    <>
      <p style={{ fontSize: '30px' }}>스터디 컴포넌트</p>
      <BigStudyItem />
      <SmallStudyItem text1={'6 / 6'} text2={'조정 예정'} type={'GREEN'} />
      <SmallStudyItem text1={'5 / 6'} text2={'화요일 19시'} type={'BLUE'} />
      <br />
      <br />
      <p style={{ fontSize: '30px' }}>자기소개 컴포넌트</p>
      <IntroduceItem />
      <br />
      <br />
      <p style={{ fontSize: '30px' }}>스터디 신청하기 컴포넌트</p>
      <AppliedStudyItem
        text1={''}
        text2={''}
        type={'GREEN'}
        buttonText={'이동하기'}
      />
      <AppliedStudyItem
        text1={'모집 인원 1명 / 6명'}
        text2={'스터디 일정 화요일 19시'}
        type={'BLUE'}
        buttonText={'신청하기'}
        exist={true}
      />
      <AppliedStudyItem
        text1={''}
        text2={''}
        type={'BLUE'}
        buttonText={'개설하기'}
        existContent={false}
      />
      <br />
      <br />
      <p style={{ fontSize: '30px' }}>모달들</p>
      <ModalApply exist={false} />
      <ModalApply exist={true} />
      <ModalReviewWrite />
      <ModalReviewers />
      <ModalStudyMake />
    </>
  );
}

export default App;
