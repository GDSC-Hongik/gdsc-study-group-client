import RedEllipse from '../assets/RedEllipse.svg';
import YellowEllipse from '../assets/YellowEllipse.svg';
import GreenEllipse from '../assets/GreenEllipse.svg';

const Titlebar = () => {
  return (
    <>
      <div className="titlebar">
        <img src={RedEllipse}></img>
        <img src={YellowEllipse}></img>
        <img src={GreenEllipse}></img>
      </div>
    </>
  );
};

export default Titlebar;

const titlebar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #c7c7c7;
  width: 1056px;
  height: 32px;
  gap: 8px;
  padding: 8px 9px;
`;
