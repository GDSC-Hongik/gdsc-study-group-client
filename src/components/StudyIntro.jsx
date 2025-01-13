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
  padding: 72px 360px;
  width: 1016px;

  .Title {
    height: 48px;
    margin-bottom: 8px;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .Description {
    height: 24px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
`;
