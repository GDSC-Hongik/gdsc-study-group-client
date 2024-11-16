import styled from '@emotion/styled';
import Ellipse from '../assets/Ellipse.svg';
import arrow from '../assets/arrow.svg';

const StudyItemBig = ({
  studyname,
  studydetail,
  studycurrentTO,
  studyMaxTO
}) => {
  return (
    <Wrapper>
      <div className="left">
        <div className="profile">
          <img src={Ellipse} sizes="128px"></img>
        </div>
        <div className="main">
          <div className="title">{studyname}</div>
          <div className="content">{studydetail}</div>
        </div>
      </div>
      <div className="right">
        <div className="TO">
          {studycurrentTO} / {studyMaxTO}
        </div>
        <div className="arrow">
          <img src={arrow} sizes="64px"></img>
        </div>
      </div>
    </Wrapper>
  );
};

export default StudyItemBig;

const Wrapper = styled.div``;
