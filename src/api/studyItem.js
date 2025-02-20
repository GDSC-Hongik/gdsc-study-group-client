//개설하기 버튼을 눌러서 모달에서 스터디를 생성했을 때 홈페이지에 스터디가 추가된다.
export async function fetchStudyList() {
  try {
    const response = await baseApi.get('/studies'); // 스터디 전체 목록 가져와서 홈페이지에 보여주기
    setStudyList(convertMocData(response.data)); // 변환된 데이터
    alert('스터디 목록을 성공적으로 불러왔습니다.');
  } catch (e) {
    console.error(e);
    alert('스터디 목록을 불러오는데 실패했습니다.');
  }
}

// 스터디 모집(지원) 상태에 따른 필터링
// 1. 모집 중인 스터디가 없으면 '개설하기' 스터디 하나만
// 2. 모집 중인(지원 안한) 스터디가 있으면 '지원하기' 스터디 보여주기
// 3. 지원 중인 스터디가 있으면  '지원 중..' 스터디 보여주기
// 4. 지원 완료된 스터디가 있으면 '이동하기' 스터디 보여주기
export async function fetchStudyParticipants() {
  try {
    const response = await baseApi.get(`/studies/${study_id}/participants`);
    setStudyList(response.data);
    alert('스터디 참여자 목록을 성공적으로 불러왔습니다.');
  } catch (e) {
    console.error(e);
    alert('스터디 참여자 목록을 불러오는데 실패했습니다.');
  }
}
