import styled from '@emotion/styled';

const ReviewItem = ({ id, name, idcontent }) => {
  return (
    <div>
      <Ptag className="name">{name}</Ptag>
      <Ptag className="content">{idcontent}</Ptag>
    </div>
  );
};
export default ReviewItem;

const Ptag = styled.p`
  color: #000;
  font-style: normal;
  line-height: normal;
  & * {
    color: #000;
    font-style: normal;
    line-height: normal;
  }
  &.name {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;

    margin-bottom: 10px;
  }
  &.content {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;

    margin-bottom: 16px;
  }
`;
