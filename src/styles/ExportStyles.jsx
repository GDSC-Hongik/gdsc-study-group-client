export const handleResizeHeight = e => {
  // 글을 씀에 따라 동적으로 같이 늘어나는 높이
  // onInput 이벤트로 스타일을 반영해준다.
  e.target.style.height = 'auto'; // 초기화
  e.target.style.height = `${e.target.scrollHeight}px`; // 살제 높이 반영
};
