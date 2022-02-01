import React, {useState} from 'react';
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

  const handleClick = ({target}) => {
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
        <section onClick={handleClick} style={{background: '#b1e6f0',     opacity: 0.9
}}>
          <Icon />
        </section>
        <section onClick={handleClick} style={{background: '#b1e6f0'}}>
        
        </section>
        <section onClick={handleClick} style={{background: '#b1e6f0'}}>
         
        </section>
        <section onClick={handleClick} style={{background: '#b1e6f0'}}>
          
        </section>
        <section onClick={handleClick} style={{background: '#b1e6f0'}}>
          
        </section>
        <section onClick={handleClick} style={{background: '#b1e6f0'}}>
     
        </section>
      </Cube>
    </main>
);
}

export default CubeMaster;