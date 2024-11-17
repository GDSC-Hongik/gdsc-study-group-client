import styled from '@emotion/styled';
import Ellipse from '../assets/Ellipse.svg';
import arrow from '../assets/arrow.svg';

const StudyItemBig = ({
  studyname,
  studydetail,
  studycurrentTO,
  studyMaxTO
}) => {
  const isFull = studycurrentTO === studyMaxTO;

  return (
    <Wrapper>
      <div className="left">
        <div className="profile">
          <img src={Ellipse} width="128px" height="128px"></img>
        </div>
        <div className="main">
          <div className="title">{studyname}</div>
          <div className="content">{studydetail}</div>
        </div>
      </div>
      <div className="right">
        <TO isFull={isFull}>
          {studycurrentTO}/{studyMaxTO}
        </TO>
        <div className="arrow">
          <img src={arrow} sizes="64px"></img>
        </div>
      </div>
    </Wrapper>
  );
};

export default StudyItemBig;

const Wrapper = styled.div`
  display: flex;
  padding: 35.5px 27px 36.5px 40px;
  width: 1200px;
  height: 200px;
  border: 1px solid #6b6b6b;
  border-radius: 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.8px;
  flex-direction: row;

  .left {
    display: flex;
    gap: 39px;
    margin-right: 432px;

    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;

      .content {
        display: flex;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: -0.5px;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 170px;
    gap: 41px;

    .arrow {
      display: flex;
    }
  }
`;

const TO = styled.div`
  display: flex;
  color: ${props => (props.isFull ? '#34A853' : '#368FF7')};
`;
