import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import {createContext,useEffect,useState} from "react"
import { boardDefault ,generateWordSet } from "../src/components/Words";
import GameOver from "./components/GameOver";


export const AppContext = createContext();

function App() {
  //Use context api to pass state across whole project
  const [board,setBoard] = useState(boardDefault);
  const [currentAttempt,setCurrentAttempt] = useState({attempt:0,letterPos:0});
  const [wordSet,setWordSet] = useState(new Set());

  const [usedLetters, setUsedLetters] = useState([]);

  //GameOver State
  const [gameOver,setGameOver] = useState({gameOver:false,guessedWord:false});

  const correctWord = "BEAST";

  //Generates word set, runs one once
  useEffect(()=>{
    //Async function so return promise
    generateWordSet().then((words) =>{
      console.log(words.wordSet);
      setWordSet(words.wordSet);
    })
  },[])

  const onSelectLetter = (keyVal) =>{
     //Spread operator to pass object without need to pass indvidual vals    
     const currentBoardInstance = [...board];
     currentBoardInstance[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
     setBoard(currentBoardInstance);
     setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos+1})
  }
  const onEnter = () =>{
    if(currentAttempt.letterPos !== 5) return;
    //Form word with letters in attempt to compare to letter selected in word bank
    let selectedWord ="";
    for(let i = 0; i < 5; i++){
      selectedWord += board[currentAttempt.attempt][i];
    }
    if(wordSet.has(selectedWord.toLowerCase())){
      //Moves to next attempt in word bank. Game only accepts word guess in bank
      setCurrentAttempt({attempt:currentAttempt.attempt + 1, letterPos:0})

    } else{
      alert("Word Not Found");
    }

    if(selectedWord === correctWord){
      setGameOver({gameOver:true, guessedWord:true})
      return;
    }
    //If player has reached their last attempt and not guessed the word correctly
    if(currentAttempt.attempt == 5){
      setGameOver({gameOver:true,guessedWord:false})
    }
  }
  const onDelete = () =>{
    if(currentAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1})
  }

  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{board,setBoard , currentAttempt,setCurrentAttempt, onSelectLetter,onEnter,onDelete,correctWord,usedLetters, setUsedLetters, gameOver,setGameOver}}>
        <div className="game">
          <Board/>
          {gameOver.gameOver ? <GameOver/> : <Keyboard/> }
          
        </div>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
