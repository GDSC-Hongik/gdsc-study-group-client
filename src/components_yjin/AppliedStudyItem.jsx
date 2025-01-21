import styled from '@emotion/styled';
import GrayProfile from '../assets/gray-profile.svg';
import NoStudy from '../assets/no-study.svg';

const AppliedStudyItem = ({
  text1,
  text2,
  type,
  buttonText,
  exist = false,
  existContent = true
}) => {
  return (
    <Box>
      {existContent === true && (
        <Content>
          <CircleImg
            src={GrayProfile}
            style={{ width: '48px', height: '48px' }}
          ></CircleImg>
          <div>
            <Ptag className="title">이펙티브 타입스크립트 스터디</Ptag>
            <Ptag className="detail">
              타입스크립트를 심화해서 공부하고, 공유해요.
            </Ptag>
          </div>
        </Content>
      )}

      {exist === true && (
        <ContentDetail>
          <li>{text1}</li>
          <li>{text2}</li>
        </ContentDetail>
      )}
      {existContent === false && (
        <NoStudyImg>
          <img src={NoStudy} />
          <Ptag className="noStudyment">현재 모집 중인 스터디가 없어요.</Ptag>
        </NoStudyImg>
      )}

      <ButtonDiv>
        <Button className={`Button button_${type}`}>{buttonText}</Button>
      </ButtonDiv>
    </Box>
  );
};

export default AppliedStudyItem;

const NoStudyImg = styled.div`
  margin-top: 30px;
  margin-left: 51px;
  display: flex;
  gap: 47px;
`;

const ContentDetail = styled.ul`
  padding: 0px;
  margin-top: 12px;
  margin-left: 87.5px;
`;

const CircleImg = styled.img`
  margin-right: 24px;
  margin-left: 16px;
`;

const Content = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const Button = styled.button`
  width: 348px;
  height: 36px;
  padding: 8px 39px;
  border-radius: 12px;
  border: none;
  margin-bottom: 16px;

  &.button_BLUE {
    background-color: #368ff7;
  }
  &.button_GREEN {
    background-color: #34a853;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6b6b6b;
  background-color: white;
  max-width: 380px;
  min-height: 200px;
  border-radius: 16px;
`;
const Ptag = styled.p`
  &.title {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.4px;

    margin: 0px;
    margin-bottom: 4px;
  }
  &.detail {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;

    margin: 0px;
  }
  &.noStudyment {
    color: #c2c2c2;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 200%;
    letter-spacing: -0.4px;

    max-width: 102px;
  }
`;
