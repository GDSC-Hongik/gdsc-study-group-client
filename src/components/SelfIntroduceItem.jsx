import styled from '@emotion/styled';
import heart from '../assets/heart.svg';

const SelfIntroduceItem = ({
  date,
  todaystudytitle,
  studymember,
  views,
  likes
}) => {
  return (
    <Wrapper>
      <div className="date">{date}</div>
      <div className="title">{todaystudytitle}</div>
      <div className="suffix">
        <div className="member">{studymember}</div>
        <div className="views">조회수 {views}</div>
        <div className="likes">
          <div className="heart">
            <img src={heart} sizes="16px"></img>
          </div>
          <div className="likesnum">{likes}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SelfIntroduceItem;

const Wrapper = styled.div`
  displaly: flex;
  padding: 20px;
  width: 790px;
  height: 134px;
  border: 1px solid #6b6b6b;
  border-radius: 8px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
  flex-direction: column;

  .date {
    display: flex;
    margin-bottom: 13px;
    font-weight: 400;
    letter-spacing: -0.6px;
    color: #6b6b6b;
  }

  .title {
    display: flex;
    margin-bottom: 14px;
    font-size: 24px;
  }

  .suffix {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 400;

    .member {
      display: flex;
      margin-right: 314px;
      font-size: 16px;
    }

    .views {
      display: flex;
      flex-direction: row;
      margin-right: 16px;
      letter-spacing: -0.35px;
    }

    .likes {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      letter-spacing: -0.35px;

      .heart {
        display: flex;
        margin-right: 8px;
      }
    }
  }
`;
