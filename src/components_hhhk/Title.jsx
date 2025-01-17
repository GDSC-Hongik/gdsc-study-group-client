import styled from '@emotion/styled';

const Title = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 380px;

  font-weight: 400;
  letter-spacing: -0.025em;

  .title {
    font-size: 24px;
    color: #000000;
  }

  .subtitle {
    font-size: 16px;
    color: #6b6b6b;
  }
`;

export default Title;
