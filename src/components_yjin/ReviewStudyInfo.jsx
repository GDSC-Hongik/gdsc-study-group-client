// [1. 후기 작성 모달]과 [2. 후기 작성자들 모달]에 쓰이는 스터디 정보 컴포넌트
import styled from '@emotion/styled';
import GrayProfile from '../assets/gray-profile.svg';
import Heart from '../assets/heart-icon.svg';

const ReviewStudyInfo = () => {
  return (
    <>
      <Container>
        <Info>
          <img
            src={GrayProfile}
            style={{ width: '48px', height: '48px' }}
          ></img>
          <div>
            <Ptag className="study-name">이펙티브 타입스크립트 스터디</Ptag>
            <Ptag className="stu-name">
              이혁, 강유빈, 김유진, 김태우, 이예은, 정재훈, 천민재
            </Ptag>
          </div>
        </Info>
        <SubInfo>
          {/* // 조회수 
          <Ptag className="hits">조회수 2,002</Ptag> 
          */}

          <Likes>
            <img src={Heart}></img>
            <Ptag className="numberLike">9</Ptag>
          </Likes>
        </SubInfo>
      </Container>
    </>
  );
};

export default ReviewStudyInfo;

const SubInfo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 좋아요만 세로 방향 끝에 배치 */
  padding-bottom: 24px;
  border-bottom: 1px solid #c2c2c2;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 27px;
`;

const Ptag = styled.p`
  /*공통 속성 정의 */
  color: #000;
  font-style: normal;
  line-height: normal;
  & * {
    /* 내부의 모든 자식 요소 */
    color: #000;
    font-style: normal;
    line-height: normal;
  }

  &.study-name {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;

    margin-bottom: 4px;
  }
  &.stu-name,
  &.numberLike,
  &.hits {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
    padding-bottom: 3px;
  }
`;
