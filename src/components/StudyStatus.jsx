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
              <img src={Ellipse} sizes="48px"></img>
            </div>
            <div className="studyinfo">
              <div className="studyname">{studyname}</div>
              <div className="studydetail">{studydetail}</div>
            </div>
          </div>
          <div className="content">[여기 무슨 정보를 넣을까요]</div>
          <div className="button">
            <button>{buttontext}</button>
          </div>
        </div>
      )}

      {status === 'applying' && (
        <div className="applying">
          <div className="title">
            <div className="profile">
              <img src={Ellipse} sizes="48px"></img>
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
            <button>{buttontext}</button>
          </div>
        </div>
      )}

      {status === 'empty' && (
        <div className="empty">
          <div className="emptyStudyImage">
            <img src={Empty} width="129" height="97.097"></img>
          </div>
          <div className="content">
            현재 모집 중인 <br />
            스터디가 없어요.
          </div>
          <div className="button">
            <button>{buttontext}</button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default StudyStatus;

const Wrapper = styled.div`
  // 공통속성: 속성값;
  // .div 이름 {공통속성: 속성값} 별로
`;
