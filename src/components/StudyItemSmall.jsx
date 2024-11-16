import styled from '@emotion/styled';
import Ellipse from '../assets/Ellipse.svg';
import arrow from '../assets/arrow.svg';
import Time from '../assets/Time.svg';
import User from '../assets/User.svg';

const StudyItemSmall = ({
  studyname,
  studydetail,
  studycurrentTO,
  studyMaxTO,
  studyschedule
}) => {
  return (
    <Wrapper>
      <div className="main">
        <div className="profile">
          <img src={Ellipse} sizes="80px"></img>
        </div>
        <div className="studyinfo">
          <div className="studyname">{studyname}</div>
          <div className="studydetail">{studydetail}</div>
        </div>
        <div className="studysuffix">
          <div className="member">
            <div className="User">
              <img src={User} sizes="32px"></img>
            </div>
            <div className="membernum">
              {studycurrentTO} / {studyMaxTO}
            </div>
          </div>
          <div className="schedule">
            <div className="time">
              <img src={Time} sizes="32px"></img>
            </div>
            <div className="studyschedule">{studyschedule}</div>
          </div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} sizes="48px"></img>
      </div>
    </Wrapper>
  );
};

export default StudyItemSmall;

const Wrapper = styled.div``;
/// studycurrentTo === studyMaxTo
