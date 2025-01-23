// [1. 후기 작성 모달] ModalReviewWrite에 쓰이는 리뷰 컴포넌트

import styled from '@emotion/styled';

const WritingReviews = () => {
  return (
    <>
      <Review>
        <Ptag className="bold">스터디원 후기</Ptag>
        <ReviewBox>
          <InnerBox>
            <Ptag className="bold">아직 아무도 후기를 작성하지 않았어요.</Ptag>
          </InnerBox>
        </ReviewBox>
      </Review>

      <ReviewWriting>
        <WriteBox placeholder="아직 아무도 후기를 아직 작성하지 않았어요."></WriteBox>
        <WriteButton>
          <Ptag className="writeButton">작성</Ptag>
        </WriteButton>
      </ReviewWriting>
    </>
  );
};

export default WritingReviews;

const ReviewWriting = styled.div`
  width: 758px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 53px;

  align-items: flex-end; /* 작성 버튼만 세로 방향 오른쪽 끝에 배치 */
`;

const WriteBox = styled.input`
  width: 100%;
  height: 78px;
  padding: 8px 16px;
  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #000;
  background: var(--Background-Normal, #fff);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;

  &::placeholder {
    color: #6b6b6b;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;

const WriteButton = styled.button`
  width: 104px;
  height: 36px;
  justify-content: center;
  border-radius: 8px;
  background-color: #368ff7;
  border: none;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const ReviewBox = styled.div`
  width: 758px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #555;
`;

const InnerBox = styled.div`
  display: flex;
  height: 39px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px dashed #000;
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

  &.bold {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;
  }

  &.writeButton {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.4px;
    color: white;
  }
`;
