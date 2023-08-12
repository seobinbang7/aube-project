import { useState } from 'react';

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
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default ToggleBtn;

