import './App.css';
import unicornHead from './images/unicornHead@2X.png';
import unicornNose from './images/unicornNose@2x.png';
import unicornClosedEyes from './images/unicornClosedEyes@2x.png';
import unicornOpenEyes from './images/unicornEyes@2X.png';
import React from 'react';

function App() {
  const [openEyes, setOpenEyes] = React.useState(false);
  const [greeting, setGreeting] = React.useState('');

  const time = new Date().getHours();
  const eyesStatus = !openEyes ? 'Wake up fabulous' : greeting;

  const handelClick = () => {
    setOpenEyes((prevValue) => !prevValue);
    console.log(openEyes);

    setGreeting(
      time > 6 && time < 12
        ? 'Good morning gorgeous'
        : time > 12 && time < 16
        ? 'Continue to do your stuff darling'
        : time > 16 && time < 21
        ? 'Good Evening stunning'
        : 'It is late, go to sleep!'
    );
  };

  const style = {
    opacity: !openEyes ? 0 : 1,
  };

  return (
    <div className="App">
      <button className="unicorn-btn" onClick={handelClick}>
        {eyesStatus}
      </button>
      <div className="unicorn-head">
        <img src={unicornHead} alt="" className="head--img" />
      </div>
      <div className="unicorn-open-Eyes">
        <img
          src={unicornOpenEyes}
          style={style}
          className="open-eyes--img"
          alt="you woke up the unicorn, the eyes are open"
        />
      </div>
      <div className="unicorn-closed-eyes">
        <img
          src={unicornClosedEyes}
          className="closed-eyes--img"
          alt="the unicorn still sleep and closing his eyes"
        />
      </div>
      <div className="unicorn-nose">
        <img
          src={unicornNose}
          alt="the nose of the unicorn"
          className="nose--img"
        />
      </div>
    </div>
  );
}

export default App;
