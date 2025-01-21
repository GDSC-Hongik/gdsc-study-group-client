import LeftArr from '../assets/left-small-arrow.svg';
import RightArr from '../assets/right-small-arrow.svg';
import styled from '@emotion/styled';

const TopLine = ({ exist }) => {
  return (
    <TopLine1>
      {exist === true ? (
        <DateText>
          <img src={LeftArr}></img>
          <Ptag>2024.08.15.</Ptag>
          <img src={RightArr}></img>
        </DateText>
      ) : null}
    </TopLine1>
  );
};

export default TopLine;

const Ptag = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const TopLine1 = styled.div`
  background-color: #c7c7c7;
  width: 1056px;
  height: 32px;
  padding: 8px 0px 8px 9px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateText = styled.div`
  display: flex;
  gap: 2px;
`;
