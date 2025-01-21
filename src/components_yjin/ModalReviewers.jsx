import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import TopLine from './TopLine';
import GrayArrLeft from '../assets/gray-arrow-left.svg';
import GrayArrRight from '../assets/gray-arrow-right.svg';
import GrayProfile from '../assets/gray-profile.svg';
import ReviewItem from './ReviewItem';

const studyGoalGontent =
  '프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이 자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기 위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리 인듯 합니다.';
const studyContent =
  '프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이 자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기 위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리 인듯 합니다. 학습 내용은 200자 이상이기에 우선 더 작성해봤습니다. 실제로는 더 길 것으로 예상됩니다.';
const reviewContent =
  '프로젝트를 진행하기에 앞서서 아이엠그라운드를 하며 다같이 자기소개하는 시간을 가졌습니다. 100자가 어느정도 인지 감을 잡기 위해 대략적으로 작성을 해봤는데요, 이정도 작성하면 100자 언저리 인듯 합니다.';
const data = [
  {
    id: 1,
    name: '강유빈',
    idcontent:
      '이번 스터디를 통해 데이터 분석의 기본기를 다질 수 있었어요. 특히 Python을 활용한 데이터 전처리와 시각화 부분이 정말 유익했습니다. 스터디원들과 함께 문제를 해결하면서 협업의 중요성을 느꼈고, 앞으로도 이런 기회를 많이 갖고 싶어요. '
  },
  {
    id: 2,
    name: '김유진',
    idcontent:
      '평소 영어로 말하는 게 두려웠는데, 스터디를 통해 자신감이 생겼습니다. 매주 주제를 정해 자유롭게 토론하면서 실력이 조금씩 늘어나는 게 느껴졌어요. 특히 다양한 직업과 배경을 가진 분들과의 대화가 흥미로웠습니다. 앞으로도 꾸준히 참여하고 싶어요.'
  },
  {
    id: 3,
    name: '김태우',
    idcontent:
      '학교 수업에서는 이해가 안 됐던 수학 개념들을 스터디를 통해 명확히 이해할 수 있었어요. 스터디원들과 함께 문제를 풀면서 배운 점이 많았고, 어려운 문제를 해결했을 때의 성취감도 컸습니다. 스터디 리더가 준비한 자료도 정말 도움이 많이 되었어요'
  },
  {
    id: 4,
    name: '이예은',
    idcontent:
      '처음에는 단순히 코딩을 배우고 싶어서 참여했는데, 실질적인 프로젝트를 진행하면서 많은 걸 배웠습니다. 팀원들과 함께 웹사이트를 제작하는 과정에서 협업과 실무 경험을 쌓을 수 있었고, 무엇보다 재미있게 배울 수 있어서 좋았어요. 제 포트폴리오에 큰 도움이 될 것 같아요!'
  },
  {
    id: 5,
    name: '정재훈',
    idcontent:
      '스터디를 통해 이력서와 자기소개서를 훨씬 더 잘 쓰게 되었어요. 다른 사람의 피드백을 받으면서 제가 놓쳤던 부분을 발견할 수 있었고, 면접 스터디도 정말 큰 도움이 되었습니다. 덕분에 다음 주에 최종 면접을 보게 되었어요. 이런 기회를 주셔서 감사합니다!'
  },
  {
    id: 6,
    name: '천민재',
    idcontent:
      '여행 기획 스터디는 단순히 여행을 준비하는 것 이상의 경험이었어요. 스터디원들과 함께 여행 루트를 짜고, 예산을 계획하며 다양한 아이디어를 나눌 수 있었습니다. 덕분에 다음 여행은 훨씬 알차게 즐길 수 있을 것 같아요. 스터디가 끝나도 계속해서 이런 활동을 하고 싶습니다.'
  }
];

const ModalReviewers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Modal Open</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <TopLine exist={true} />
        <EnContent>
          <ArrImg src={GrayArrLeft}></ArrImg>
          <Content>
            <Ptag className="Title">[1회차] 아이엠그라운드 자기소개하기</Ptag>
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
            <TwoGroup>
              <div>
                <PictureBox />
                <GoalBox>
                  <Ptag className="goal">학습 목표</Ptag>
                  <Ptag className="goaltxt">{studyGoalGontent}</Ptag>
                </GoalBox>
                <GoalBox>
                  <Ptag className="goal">학습 내용</Ptag>
                  <Ptag className="goaltxt">{studyContent}</Ptag>
                </GoalBox>
              </div>
              <div>
                <GoalBox>
                  {data.map(item => (
                    <ReviewItem key={item.id} {...item} />
                  ))}
                </GoalBox>
              </div>
            </TwoGroup>
            <Commenting>
              <Ptag className="comTitle">댓글</Ptag>
              <Ptag className="comTxt">
                열심히 공부하셨네요 축하드려요 - 익명
              </Ptag>
              <InputLine>
                <ComInput placeholder="댓글을 작성해주세요."></ComInput>
                <WriteButton>
                  <Ptag className="writeButton">작성</Ptag>
                </WriteButton>
              </InputLine>
            </Commenting>
          </Content>

          <ArrImg src={GrayArrRight}></ArrImg>
        </EnContent>
      </Modal>
    </>
  );
};

export default ModalReviewers;

const InputLine = styled.div`
  display: flex;
  gap: 16px;
`;

const WriteButton = styled.button`
  width: 104px;
  height: 36px;
  justify-content: center;
  border-radius: 8px;
  background-color: #368ff7;
  border: none;
  color: white;
`;

const ComInput = styled.input`
  width: 598px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #000;
  box-sizing: border-box;
  &::placeholder {
    color: #6b6b6b;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;
const Commenting = styled.div`
  border-top: 1px solid #c2c2c2;
  padding: 32px 0px 0px 20px;
  margin-bottom: 118px;
`;

const GoalBox = styled.div`
  width: 369px;
  padding: 20px;
  margin-bottom: 24px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #555;
  background: #fff;
`;

const TwoGroup = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  display: flex;
  gap: 20px;
`;

const PictureBox = styled.div`
  width: 369px;
  height: 204px;
  margin-bottom: 24px;
  background-color: #d9d9d9;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 27px;
  padding-bottom: 24px;

  border-bottom: 1px solid #c2c2c2;
`;

const ArrImg = styled.img`
  margin-bottom: 690px; /**수정 필요 */
`;

const EnContent = styled.div`
  display: flex;
  gap: 61px;
  justify-content: center;
`;

const Content = styled.div`
  margin: 0px;
  padding: 0px;
  width: 758px;
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
  &.Title {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -0.6px;

    margin-top: 80px;
  }
  &.study-name {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;

    margin-bottom: 4px;
  }
  &.stu-name {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }
  &.goal {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;

    margin-bottom: 16px;
  }
  &.goaltxt {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }

  &.comTitle {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  &.comTxt {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.5px;

    margin: 24px 0px;
  }
  &.writeButton {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.4px;
  }
`;

const customStyles = {
  content: {
    overflowX: 'hidden',
    overflowY: 'auto',
    margin: '0px',
    padding: '0px',
    width: '1056px',
    height: '1280px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};
