import styled from '@emotion/styled';
import Logo from '../assets/Logo.png';

const NavBar = () => {
  return (
    <>
      <Header>
        <Content>
          <Logoo src={Logo}></Logoo>
          <Flex>
            <Name className="name">이혁</Name>
            <Name>&nbsp;님</Name>
          </Flex>
        </Content>
      </Header>
    </>
  );
};

export default NavBar;

const Flex = styled.div`
  display: flex;
`;

const Name = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
  &.name {
    font-weight: 700;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
`;

const Logoo = styled.img`
  width: 57.83px;
  flex-shrink: 0;
`;

const Content = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 40px;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  border-bottom: 2px solid var(--Component-Interaction-Disabled-Light, #e1e1e1);
  background: #fff;
`;
