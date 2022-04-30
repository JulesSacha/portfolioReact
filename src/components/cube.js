import React, { useState } from 'react';
import Cube from '../components/cube-master';
import Icon from '../svgr/icon';

function CubeMaster() {
  const bodyStyle = document.body.style;
  const [selected, setSelected] = useState('');
  const [reveal, setReveal] = useState(false);

  const handleMouseDown = () => {
    bodyStyle.setProperty('--cursor', 'grabbing');
  };

  const handleMouseUp = () => {
    bodyStyle.setProperty('--cursor', 'grab');
  };

  const handleClick = ({ target }) => {
    setSelected(target.textContent);
  };



  const handleToggleReveal = () => {
    setReveal(reveal => !reveal);
  };

  return (
    <main>

      <Cube
        className='cube-viewport'
        cubeSize='200px'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleToggleReveal}
        reveal={reveal}
        viewportSize='350px'
      >
        <section onDoubleClick={handleClick} style={{ background: '#b1e6f0' }}>
       <svg  xmlns="http://www.w3.org/2000/svg" version="1.1"
    className="icon"><Icon /></svg>
        </section>
        <section onClick={handleClick} style={{ background: '#5671E0' }}>
          <h1><i class='fab fa-react'></i></h1>
        </section>
        <section onClick={handleClick} style={{ background: '#5671E0' }}>
        <h1><i class='fab fa-js'></i></h1>

        </section>
        <section onClick={handleClick} style={{ background: '#5671E0' }}>
        <h1><i class='fab fa-php'></i></h1>
        </section>
        <section onClick={handleClick} style={{ background: '#5671E0' }}>
        <h1><i class='fab fa-ethereum'></i></h1>
        </section>
        <section onClick={handleClick} style={{ background: '#5671E0' }}>
        <h1><i class='fab fa-wordpress'></i></h1>
        </section>

      </Cube>



    </main>
  );
}

export default CubeMaster;