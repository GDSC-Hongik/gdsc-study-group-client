import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/Logo.png';
const NavBar = () => {
  const nav = useNavigate();
  const moveMain = () => {
    // GDGoC 로고를 클릭하면 Home 페이지로 이동하는 함수
    nav('/');
  };
  const moveApplierStatus = () => {
    // 내 이름을 누르면 지원상태확인(StudyApplierStatusPage) 페이지로 이동하는 함수
    nav('/applierstatus');
  };

  return (
    <>
      <Header>
        <Content>
          <Logoo onClick={moveMain} src={Logo}></Logoo>
          <Flex onClick={moveApplierStatus}>
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
    text-decoration-line: underline; /* 밑줄 */
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font; /* 적절한 위치에 밑줄을 표시 */
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
  position: fixed; /* 고정 위치로 설정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 화면에서 쌓이는 순서를 제어, 값이 높을수록 화면에서 더 위쪽에 표시된다. */

  border-bottom: 2px solid #e1e1e1;
  background: #fff;
`;
