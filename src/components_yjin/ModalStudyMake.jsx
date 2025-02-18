// 새로운 스터디를 만드는 모달
// [개설하기]/[스터디 생성] 버튼 클릭 시 나온다.

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

const ModalStudyMake = ({ isOpen, onClose }) => {
  // 실제 모달 기능 구현 전, 쓰던 모달 상태 관리 변수 / 함수는 제거한다.
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);

  // 상태 관리 (사용자가 입력할 값)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [requirement, setRequirement] = useState('');
  const [question, setQuestion] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [week, setWeek] = useState('');
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState({
    hour: '',
    minute: '',
    second: '',
    nano: ''
  });
  const [studyStatus, setStudyStatus] = useState('OFFLINE');
  const [curriculums, setCurriculums] = useState([{ week: 1, subject: '' }]);

  const createStudy = async () => {
    try {
      const response = await baseApi.post('/studies', {
        name: name,
        description: description,
        requirement: requirement,
        question: question,
        maxParticipants: maxParticipants,
        curriculums: curriculums,
        days: [],
        studyStatus: 'OFFLINE'
      });
      alert('스터디가 성공적으로 생성되었습니다.');
      console.log('스터디 생성 응답:', response.data);

      // 모딜 닫기 및 상태 초기화
      onClose();
      resetForm();
    } catch (e) {
      console.error(e);
      alert('스터디 생성에 실패했습니다.');
    }
  };

  const resetForm = () => {
    // 입력값 초기화 함수
    setName('');
    setDescription('');
    setRequirement('');
    setQuestion('');
    setMaxParticipants('');
    setWeek(0);
    setSubject('');
    setDay('');
    setStartTime({ hour: '', minute: '', second: '', nano: '' });
  };

  const handleChange = e => {
    // 스터디 상태 드롭다운 값이 변경될 때 실행되는 함수
    setStudyStatus(e.target.value);
    console.log('선택한 스터디 상태(온라인/오프라인):', e.target.value);
  };

  const handleCurriculumChange = (index, key, value) => {
    // 커리큘럼 전체 주차 목록
    const newCurriculums = [...curriculums];
    newCurriculums[index][key] = value;
    setCurriculums(newCurriculums);
  };

  const addCurriculum = () => {
    // 커리큘럼 주차 추가
    setCurriculums([
      ...curriculums,
      { week: curriculums.length + 1, subject: '' }
    ]);
  };

  return (
    <>
      {/* isOpen이 true일 때만 이 모달이 열린다. 이 값은 상위 파일에서 props로 전달 */}
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <Content>
          <Title
            placeholder="스터디명을 입력해주세요."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Flex className="firstFlex">
            <HalfBox className="firstHalfBox">
              <p1>진행 방식</p1>
              <StyledSelect
                style={{ border: 'none' }}
                value={studyStatus}
                onChange={handleChange}
              >
                <option value="ONLINE">온라인</option>
                <option value="OFFLINE">오프라인</option>
                <option value="HYBRID">온/오프라인 병행</option>
              </StyledSelect>
            </HalfBox>
            <HalfBox className="firstHalfBox">
              <p1>예상 모집 인원</p1>
              <InputStyle
                type="text"
                placeholder="6인"
                value={maxParticipants}
                onChange={e => setMaxParticipants(e.target.value)}
              ></InputStyle>
            </HalfBox>
          </Flex>

          <Box className="firstBox">
            <p1>스터디 설명</p1>
            <Description
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="스터디 설명을 입력하세요."
            />
          </Box>

          <Flex className="secondFlex">
            <HalfBox>
              <p1>지원 조건</p1>
              <Description
                type="text"
                value={requirement}
                placeholder="조건을 입력하세요."
                onChange={e => setRequirement(e.target.value)}
              />
            </HalfBox>
            <HalfBox>
              <p1>지원 질문</p1>
              <Description
                type="text"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="어떤 공부를 해오셨나요?"
              />
            </HalfBox>
          </Flex>

          <Flex>
            <HalfBox className="option">
              <p1>지원 자격</p1>
              <p2>(선택)</p2>
            </HalfBox>
            <HalfBox className="option">
              <p1>시작 일자</p1>
              <p2>(선택)</p2>
            </HalfBox>
          </Flex>

          <Sylabus>스터디 예상 커리큘럼</Sylabus>
          {curriculums.map((curriculum, index) => (
            <Box key={index}>
              <p>{curriculum.week}주차</p>
              <Description
                type="text"
                value={curriculum.subject}
                onChange={e =>
                  handleCurriculumChange(index, 'subject', e.target.value)
                }
                placeholder="주제를 입력하세요."
              />
            </Box>
          ))}
          <Button onClick={addCurriculum}>커리큘럼 추가</Button>

          <Creating onClick={createStudy}>생성하기</Creating>
        </Content>
      </Modal>
    </>
  );
};

export default ModalStudyMake;

const Button = styled.button`
  border: solid 0.7px #3f82f6;
  border-radius: 10px;
  padding: 5px;
  background-color: #fff;
  color: #3f82f6;
  text-align: center;
`;

const InputStyle = styled.input`
  width: 40px;
  border: none;
  &::placeholder {
    color: #c2c2c2;
  }
  &:focus {
    outline: none;
  }
`;

const StyledSelect = styled.select`
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Description = styled.input`
  border: none;
  &::placeholder {
    color: #c2c2c2;
  }
  &:focus {
    outline: none;
  }
`;

const commonFont = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const Creating = styled.button`
  width: 348px;
  height: 36px;
  border: none;
  border-radius: 12px;
  background: #368ff7;

  margin-top: 16px;

  color: #fff;
  ${commonFont}
  font-weight: 400;

  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  ${commonFont}
  width: 758px;
  padding: 20px;
  margin-bottom: 15px;

  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #555;

  display: flex;
  flex-direction: column;
  gap: 16px;

  &.firstBox {
    margin-bottom: 27px;
  }

  p2 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }
`;

const HalfBox = styled.div`
  ${commonFont}
  min-width: 360px;
  padding: 20px;

  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #555;

  p2 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }

  display: flex;
  flex-direction: column;
  gap: 16px;

  &.firstHalfBox {
    padding: 12px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p2 {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.35px;
      display: flex;
      justify-content: center;
    }
  }

  &.option {
    border: 1px solid #c5c5c5;
    color: #909090;
  }
`;

const Sylabus = styled.p`
  ${commonFont}
  margin: 32px 0px 17px 0px;
`;

const Flex = styled.div`
  display: flex;
  gap: 38px;

  &.firstFlex {
    margin-bottom: 18px;
  }
  &.secondFlex {
    margin-bottom: 29px;
  }
`;

const Title = styled.input`
  width: 758px;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.6px;

  margin: 72px 62px;

  border: none;
  outline: none;
  &::placeholder {
    color: #c2c2c2;
  }
`;

const customStyles = {
  content: {
    width: '1056px',
    height: '880px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  }
};
