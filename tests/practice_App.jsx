import AppliedStudyItem from '../components/AppliedStudyItem';
import BigStudyItem from '../components/BigStudyItem';
import IntroduceItem from '../components/IntroduceItem';
import SmallStudyItem from '../components/SmallStudyItem';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <IntroduceItem />
      <div>--</div>
      <BigStudyItem />
      <div>--</div>
      <SmallStudyItem text1={'6 / 6'} text2={'조정 예정'} type={'GREEN'} />
      <div>--</div>
      <SmallStudyItem text1={'5 / 6'} text2={'화요일 19시'} type={'BLUE'} />
      <div>--</div>
      <AppliedStudyItem
        text1={''}
        text2={''}
        type={'GREEN'}
        buttonText={'이동하기'}
      />
      <div>--</div>
      <AppliedStudyItem
        text1={'모집 인원 1명 / 6명'}
        text2={'스터디 일정 화요일 19시'}
        type={'BLUE'}
        buttonText={'신청하기'}
        exist={true}
      />
      <div>--</div>
      <AppliedStudyItem
        text1={''}
        text2={''}
        type={'BLUE'}
        buttonText={'개설하기'}
        existContent={false}
      />
    </>
  );
}

export default App;
