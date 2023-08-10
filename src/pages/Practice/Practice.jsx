import { useState } from 'react';
import './Practice.css';

function ToggleBtn() {
  const [isOn, setIsOn] = useState(false); 

  const toggleEvent = () => {
    setIsOn(state => !state);
  };

  return (
    <>
      <div
        className={`toggle-btn ${isOn ? 'on' : 'off'}`}
      >
        <div className="circle" onClick={toggleEvent}></div>
      </div>
    </>
  );
}

export default ToggleBtn;

