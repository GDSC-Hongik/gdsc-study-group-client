import styled from '@emotion/styled';
import ArrowRight from '../assets/ArrowRight.svg';
import Profile from '../assets/Profile.svg';
import User from '../assets/User.svg';
import Time from '../assets/Time.svg';


const StudyListItem = () => {
  return (
    <Wrapper>
      <div className="content">
        <img src={Profile} sizes="40px"></img>
        <div className="title">
          이펙티브 타입스크립트
          <div className="subtitle">
            타입스크립트를 심화해서 공부하고 공유해요.
          </div>
          <div className="status">
            <div className="member">
              <img src={User}></img>5 / 6
            </div>
            <div className="time">
              <img src={Time}></img>
              화요일 19시
            </div>
          </div>
        </div>
      </div>

      <div className="arrow">
        <img src={ArrowRight}></img>
      </div>
    </Wrapper>
  );
};

export default StudyListItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 20px 32px 20px;
  width: 588px;
  height: 176px;
  border: 1px solid #6b6b6b;
  border-radius: 16px;
  box-sizing: border-box;
  align-items: center;

  .content {
    display: flex;
    gap: 20px;
    height: 112px;

    .title {
      font-size: 24px;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .subtitle {
        font-size: 18px;
        font-weight: 400;
      }

      .status {
        display: flex;
        gap: 32px;

        .member {
          color: #368ff7;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .time {
          display: flex;
          align-items: center;

          font-weight: 400;
          color: #6b6b6b;
          gap: 12px;
        }
      }
    }
  }
`;
