/** StudyIntro.jsx */
import React from 'react';
import styled from '@emotion/styled';

function StudyIntro({ studyName, studyDescription }) {
  return (
    <IntroWrapper>
      <div className="Title">{studyName}</div>
      <div className="Description">{studyDescription}</div>
    </IntroWrapper>
  );
}

export default StudyIntro;

const IntroWrapper = styled.div`
  /* 필요하다면 display: flex를 사용하고 align-items나 justify-content 등 설정을 할 수 있습니다 */
  //padding: 72px 360px;
  //width: 1016px;
  box-sizing: border-box;

  .Title {
    /* align-self: stretch; (flex 컨테이너가 아니라면 필요 없음) */
    margin-bottom: 8px;

    color: #000;
    font-family: Pretendard, sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
  }

  .Description {
    /* align-self: stretch; (flex 컨테이너가 아니라면 필요 없음) */

    color: #000;
    font-family: Pretendard, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
  }
`;
