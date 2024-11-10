import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
  ${emotionReset}
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Pretendard';
    overflow-y: auto;
  }
`;
