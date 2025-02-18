/** StudyGroup.jsx */
import React from 'react';
import styled from '@emotion/styled';
import github from '../assets/github.svg';

function StudyGroup({ manager, members }) {
  return (
    <GroupWrapper>
      <div className="studygroupinfo">
        <div className="leader">
          <div className="leaderis">스터디장</div>
          <div className="leaderbox">
            <div className="leadername">{manager.name}</div>
            <div className="leadergithub">{manager.github}</div>
            <img
              className="githubicon"
              src={github}
              width="24px"
              height="24px"
              alt="github"
            />
          </div>
        </div>
        <div className="member">
          <div className="memberis">스터디원</div>
          <div>
            {members.map((member, index) => (
              <div key={index} className="memberbox">
                <div className="membername">{member.name}</div>
                <div className="membergithub">{member.github}</div>
                <img
                  className="githubicon"
                  src={github}
                  width="24px"
                  height="24px"
                  alt="github"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </GroupWrapper>
  );
}

export default StudyGroup;

const GroupWrapper = styled.div`
  /* 가장 큰 박스 스타일 */
  box-sizing: border-box;
  display: flex;
  width: 277px;
  padding: 24px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--Component-Default-Outline, #c2c2c2);
  background: #fff;

  .studygroupinfo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .leader {
    margin-bottom: 24px;
  }

  /* 스터디장/스터디원 텍스트 스타일 */
  .leaderis,
  .memberis {
    align-self: stretch;
    color: #368ff7;
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.35px;
    margin-bottom: 8px;
  }

  /* 리더/멤버 정보 박스 스타일 */
  .leaderbox,
  .memberbox {
    display: flex;
    align-items: center;
    gap: 4px; /* 이름과 깃허브 핸들 사이 간격 */
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--Component-Interaction-Disabled-Dark, #c2c2c2);
    background: #fff;
    margin-bottom: 8px;
  }

  /* 이름만 볼드 처리 */
  .leadername,
  .membername {
    font-weight: 700;
  }

  /* 깃허브 핸들은 일반 폰트로 (원한다면 400 지정) */
  .leadergithub,
  .membergithub {
    font-weight: 400;
  }

  /* 깃허브 아이콘을 오른쪽 끝으로 밀기 */
  .githubicon {
    margin-left: auto;
  }
`;
