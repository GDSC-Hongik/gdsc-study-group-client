import styled from '@emotion/styled';
import Ellipse from '../assets/Ellipse.svg';
import Empty from '../assets/Empty.svg';

const StudyStatus = ({
  studyname,
  studydetail,
  studycurrentTO,
  studyMaxTO,
  studyschedule,
  buttontext,
  status
}) => {
  return (
    <Wrapper>
      {status === 'applied' && (
        <div className="applied">
          <div className="title">
            <div className="profile">
              <img
                src={Ellipse}
                style={{ width: '48px', height: '48px' }}
              ></img>
            </div>
            <div className="studyinfo">
              <div className="studyname">{studyname}</div>
              <div className="studydetail">{studydetail}</div>
            </div>
          </div>
          <div className="content">[여기 무슨 정보를 넣을까요]</div>
          <div className="button">
            <Button status={status}>{buttontext}</Button>
          </div>
        </div>
      )}

      {status === 'applying' && (
        <div className="applying">
          <div className="title">
            <div className="profile">
              <img src={Ellipse} width="48px" height="48px"></img>
            </div>
            <div className="studyinfo">
              <div className="studyname">{studyname}</div>
              <div className="studydetail">{studydetail}</div>
            </div>
          </div>
          <div className="content">
            <div className="studyMember">
              <div className="studyMemberHead">
                <li>모집 인원</li>
              </div>
              <div className="studyMemberBody">
                {studycurrentTO}명 / {studyMaxTO}명
              </div>
            </div>
            <div className="studySchedule">
              <div className="studyScheduleHead">
                <li>스터디 일정</li>
              </div>
              <div className="studyScheduleBody">{studyschedule}</div>
            </div>
          </div>
          <div className="button">
            <Button status={status}>{buttontext}</Button>
          </div>
        </div>
      )}

      {status === 'empty' && (
        <div className="empty">
          <div className="Upper">
            <div className="emptyStudyImage">
              <img src={Empty}></img>
            </div>
            <div className="content">
              현재 모집 중인 <br />
              스터디가 없어요.
            </div>
          </div>
          <div className="button">
            <Button status={status}>{buttontext}</Button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default StudyStatus;

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  width: 380px;
  height: 200px;
  border: 1px solid #6b6b6b;
  border-radius: 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;

  .applied {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      margin-bottom: 27px;

      .studyinfo {
        .studydetail {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.35px;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 38px;
      color: #c2c2c2;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .applying {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      margin-bottom: 27px;

      .studyinfo {
        .studydetail {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.35px;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 24px;
      font-size: 14px;
      letter-spacing: -0.35px;

      .studyMember {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        gap: 16px;

        .studyMemberHead {
          font-weight: 400;
        }
      }

      .studySchedule {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        gap: 16px;

        .studyScheduleHead {
          font-weight: 400;
        }
      }
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;

    .Upper {
      display: flex;
      color: #c2c2c2;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 47px;
      margin-bottom: 20.9px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  font-size: 16px;
  padding: 8px 39px;
  width: 348px;
  height: 36px;
  border-radius: 12px;
  border: none;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${props =>
    props.status === 'applied' ? '#34A853' : '#368FF7'};
`;
