# GDG on Campus Hongik Univ.

홍익대학교 GDG의 자율 스터디를 위한 서비스

## 프로젝트 생성 과정

**`npm install -g pnpm`**
작동하지 않을 경우, `sudo`를 앞에 붙여서 실행함.

**`pnpm create vite . --template react`**

## 라이브러리

- axios
- react-router-dom
- @emotion
  - @emotion/css @emotion/react @emotion/styled @emotion/core
- @tanstack
  - @tanstack/react-query @tanstack/react-query-devtools
- prettier
- eslint
  - eslint-plugin-prettier
    - eslint와 prettier가 서로 충돌하지 않기 위한 플러그인.
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - eslint-plugin-jsx-a11y
    - jsx 문법(xml 부분)을 정적 분석할 수 있도록 하는 모듈.
- husky
