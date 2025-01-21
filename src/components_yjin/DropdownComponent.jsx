import { useState } from 'react';
import styled from '@emotion/styled';

const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('필터');

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelect = value => {
    setSelectedValue(value); // 선택한 값 저장
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <Dropdown onClick={toggleDropdown}>
      {selectedValue} {/* 선택한 값 표시 */}
      <DropdownList isOpen={isOpen}>
        <DropdownItem onClick={() => handleSelect('카테고리 1')}>
          카테고리 1
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect('카테고리 2')}>
          카테고리 2
        </DropdownItem>
        <DropdownItem onClick={() => handleSelect('카테고리 3')}>
          카테고리 3
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
export default DropdownComponent;

const Dropdown = styled.div`
  width: 175px;
  height: 36px;

  box-sizing: border-box;
  border: 1px solid #585858;
  border-radius: 8px;

  padding: 8px;
  background: #fff;
  position: relative;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;

  &::after {
    content: '▼'; /* 아이콘 */
    font-size: 12px;

    height: 100%; /* 드롭다운 화살표를 세로방향 가운데 정렬 */
    align-items: center;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%; /* Dropdown 아래에 위치 */
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 10;

  /* 리스트 숨김 처리 */
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 0;
  margin: 0;
  list-style: none;

  /* 예시 항목 스타일 */
  li {
    padding: 8px;
    cursor: pointer;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

const DropdownItem = styled.li`
  /* 리스트 항목에 추가 스타일 지정하기 */
`;
