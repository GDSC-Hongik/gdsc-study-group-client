import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    src:
      local('Pretendard Black'),
      local('Pretendard-Black'),
      url(../fonts/Pretendard-Black.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    src:
      local('Pretendard ExtraBold'),
      local('Pretendard-ExtraBold'),
      url(../fonts/Pretendard-ExtraBold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    src:
      local('Pretendard ExtraBold'),
      local('Pretendard-ExtraBold'),
      url(../fonts/Pretendard-ExtraBold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    src:
      local('Pretendard Bold'),
      local('Pretendard-Bold'),
      url(../fonts/Pretendard-Bold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    src:
      local('Pretendard SemiBold'),
      local('Pretendard-SemiBold'),
      url(../fonts/Pretendard-SemiBold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    src:
      local('Pretendard Medium'),
      local('Pretendard-Medium'),
      url(../fonts/Pretendard-Medium.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    src:
      local('Pretendard Regular'),
      local('Pretendard-Regular'),
      url(../fonts/Pretendard-Regular.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    src:
      local('Pretendard Light'),
      local('Pretendard-Light'),
      url(../fonts/Pretendard-Light.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 200;
    src:
      local('Pretendard ExtraLight'),
      local('Pretendard-ExtraLight'),
      url(../fonts/Pretendard-ExtraLight.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 100;
    src:
      local('Pretendard Thin'),
      local('Pretendard-Thin'),
      url(../fonts/Pretendard-Thin.woff) format('woff');
  }

  * {
    font-family: 'Pretendard';
  }

  body {
    width: 1280px;
    height: 100vh;

    overflow-y: auto;
  }
`;
