import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import woods from './assets/woods_1.jpg'
import epk from './assets/epk.png';

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
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

function App() {

  const [posTop, setPosTop] = React.useState([]);
  const [posLeft, setPosLeft] = React.useState([]);

  const handleClick = (event) => {
    console.log('click handled')
    const x = event.clientX;
    const y = event.clientY;
    setPosTop(posTop => [...posTop, y]);
    setPosLeft(posLeft => [...posLeft, x]);
  }

  return (
    <div className="App">
      <Container onClick={handleClick}>
        {posTop.map((pt, i) => {
          const pl = posLeft[i];
          return <Image src={epk} top={pt} left={pl} />
        })}
      </Container>
    </div>
  );
}

export default App;
