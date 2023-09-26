import styled from "styled-components";

const RoleDice = () => {
  return (
    <DiceContainer>
      <div>
        <img src = "/image/dice/dice_1.png" alt="1"/>
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`