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
            <div>
              <img src={github} width="24px" height="24px"></img>
            </div>
          </div>
        </div>
        <div className="member">
          <div className="memberis">스터디원</div>
          <div>
            {members.map((member, index) => (
              <div key={index} className="memberbox">
                <div className="membername">{member.name}</div>
                <div className="membergithub">{member.github}</div>
                <div>
                  <img src={github} width="24px" height="24px"></img>
                </div>
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
  display: flex;
  width: 277px;
  padding: 24px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--Component-Default-Outline, #c2c2c2);
  background: #fff;

  .studygroupinfo .leader {
    margin-bottom: 24px;
  }

  .leaderis {
    display: flex;
    width: 237px;
    height: 17px;
    padding: 8px 16px;
    align-self: stretch;
    justify-content: flex-start;
  }
  .leaderbox {
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--Component-Interaction-Disabled-Dark, #c2c2c2);
    background: #fff;
  }
  .memberis {
    display: flex;
    width: 237px;
    height: 17px;
    padding: 8px 16px;
    align-self: stretch;
    justify-content: flex-start;
  }

  .memberbox {
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--Component-Interaction-Disabled-Dark, #c2c2c2);
    background: #fff;
  }
`;
