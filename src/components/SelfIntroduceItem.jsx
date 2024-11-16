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

const Wrapper = styled.div``;
