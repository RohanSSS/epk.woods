import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import woods from './assets/woods_1.jpg'
import epk from './assets/epk.png';

import audioClips from './asset_import.js';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${woods});
  background-size: cover;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  pointer-events: none
`;

function App() {

  const [currentPos, setCurrentPos] = React.useState([]);
  const [posX, setPosX] = React.useState([]);
  const [posY, setPosY] = React.useState([]);
  const [isMouseDown, setIsMouseDown] = React.useState(false);

  const handleMouseMove = (event) => {
    const x = event.clientX - 64;
    const y = event.clientY - 64;
    setCurrentPos([x, y]);
    if (isMouseDown === true) {
      setPosX(posLeft => [...posX, currentPos[0]]);
      setPosY(posY => [...posY, currentPos[1]]);
      audioClips[Math.floor(Math.random() * Math.floor(audioClips.length))].play();
    }
  }

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
  }

  const handleMouseUp = (event) => {
    setIsMouseDown(false);
  }

  const handleClick = (event) => {
    console.log('click handled')
    setPosX(posX => [...posX, currentPos[0]]);
    setPosY(posY => [...posY, currentPos[1]]);
    audioClips[Math.floor(Math.random() * Math.floor(audioClips.length))].play();
  }

  return (
    <div className="App">
      <Container onClick={handleClick} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        {posX.map((x, i) => {
          const y = posY[i];
          return <Image src={epk} top={y} left={x} />
        })}
      </Container>
    </div>
  );
}

export default App;
