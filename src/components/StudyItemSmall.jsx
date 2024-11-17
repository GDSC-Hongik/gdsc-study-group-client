import styled from '@emotion/styled';
import Ellipse from '../assets/Ellipse.svg';
import arrow from '../assets/arrow.svg';
import Time from '../assets/Time.svg';
import UserBlue from '../assets/UserBlue.svg';
import UserGreen from '../assets/UserGreen.svg';

const StudyItemSmall = ({
  studyname,
  studydetail,
  studycurrentTO,
  studyMaxTO,
  studyschedule
}) => {
  const isFull = studycurrentTO === studyMaxTO;
  const UserIcon = isFull ? UserGreen : UserBlue;
  return (
    <Wrapper>
      <div className="profile">
        <img src={Ellipse} width="80px" height="80px"></img>{' '}
      </div>
      <div className="main">
        <div className="studyinfo">
          <div className="studyname">{studyname}</div>
          <div className="studydetail">{studydetail}</div>
        </div>
        <div className="studysuffix">
          <div className="member">
            <div className="User">
              <img src={UserIcon} width="32px" height="32px"></img>
            </div>
            <TO isFull={isFull}>
              {studycurrentTO} / {studyMaxTO}
            </TO>
          </div>
        </div>
        <div className="schedule">
          <div className="time">
            <img src={Time} width="32px" height="32px"></img>
          </div>
          <div
            className="when"
            style={{
              color: '#6b6b6b',
              fontSize: '20px',
              fontWeight: '400',
              letterSpacing: '-0.5px'
            }}
          >
            {studyschedule}
          </div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} width="48px" height="48px"></img>
      </div>
    </Wrapper>
  );
};

export default StudyItemSmall;

const Wrapper = styled.div`
  display: flex;
  padding: 32px 20px;
  width: 588px;
  height: 176px;
  border: 1px solid #6b6b6b;
  border-radius: 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.6px;
  flex-direction: row;

  .profile {
    display: flex;
    margin-right: 20px;
    justify-content: flex-start;
    align-items: center;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 20px;

    .studyinfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;

      .studyname {
        display: flex;
      }

      .studydetail {
        display: flex;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.4px;
      }
    }

    .studysuffix {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 32px;

      .member {
        display: flex;
        gap: 13px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .schedule {
        display: flex;
        gap: 11px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .time {
          display: flex;
          align-items: center;
        }

        .when {
          display: flex;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #6b6b6b;
          align-items: center;
        }
      }
    }
  }

  .arrow {
    display: flex;
    justify-content: center;
  }
`;

const TO = styled.div`
  display: flex;
  color: ${props => (props.isFull ? '#34A853' : '#368FF7')};
`;
