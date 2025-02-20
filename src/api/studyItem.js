import baseApi from './baseApi';

// API에서 받은 데이터를 변환하는 함수
// 모집 인원 maxParticipants
// 스터디 일정 schedule
export const convertMocData = apiData => {
  return apiData.map(study => ({
    id: study.studyId,
    name: study.name,
    description: study.description,
    maxParticipants:
      study.maxParticipants === 0
        ? '제한 없음'
        : `0명/${study.maxParticipants}명`, // 0명을 신청하면 한명씩 늘어나게 해야함
    schedule:
      study.studyStatus === 'ONLINE'
        ? '온라인'
        : study.days?.length > 0
          ? study.days.map(d => `${d.day} ${d.startTime.hour}시`).join(',')
          : '일정 없음'
  }));
};

//개설하기 버튼을 눌러서 모달에서 스터디를 생성했을 때 홈페이지에 스터디가 추가된다.
export async function fetchStudyList(setStudyList) {
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
export async function fetchStudyParticipants(studyId, setStatus) {
  try {
    const response = await baseApi.get(`/studies/${studyId}/participants`);
    setStatus(response.data.status);
    alert('스터디 지원 상태를 성공적으로 불러왔습니다.');
  } catch (e) {
    console.error(e);
    alert('스터디 지원 상태를 불러오는데 실패했습니다.');
  }
}
