import styled from 'styled-components'


const StartGame = () => {
  return (
   <>
       <Container>
            <div>

            <img src='/image/dices.png' />
            </div>
            <div className='content'>
              <h1 >Dice Game</h1>
              <Button>Play Now</Button>
            </div>
       </Container>
  </>
    
  )
}

export default StartGame

const Container = styled.div`
  max-width:1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1{
      font-size: 96px;
      white-space: nowrap;

    }
  }
`

const Button = styled.button`
  color:white;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  border:1px solid transparent;
  transition: 0.3s background ease-in;
  cursor: pointer;

  &:hover{
    background-color:white;
    color: black;
    border: 2px solid black;
    transition: 0.3s background ease-in;
  }
`