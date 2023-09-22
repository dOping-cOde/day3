import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame"
import { useState } from "react";


function App() {

   const [isGameStarted, setGameStarted] = useState(false);

   const toggleGamePlay = () =>{
    setGameStarted( (prev) => !prev);
   }

  return (
    <>
      {
      isGameStarted ? <GamePlay/>: <StartGame toggle= {toggleGamePlay} />
      
      }
    </>
  )
}

export default App
