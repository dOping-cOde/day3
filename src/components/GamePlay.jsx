import React from 'react'
import TotalScore from './TotalScore';
import styled from 'styled-components'
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';

const GamePlay = () => {
  return (
    <MainContainer>
     <div className='top_section'>
     <TotalScore/>
      <NumberSelector/>
     </div>
     <RoleDice/>
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.main`
  

    padding: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`