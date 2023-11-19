import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import {createContext,useState} from "react"
import { boardDefault } from "../src/components/Words";


export const AppContext = createContext();

function App() {
  //Use context api to pass state across whole project
  const [board,setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{board,setBoard}}>

        <Board/>
        <Keyboard/>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
