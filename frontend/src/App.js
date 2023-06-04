import './App.css';
import Grid from './components/Grid/Grid';
import Keyboard from './components/Keyboard/Keyboard';
import Navbar from './components/Navbar/Navbar';
import Letter from './components/letter/Letter';
import { createContext } from 'react';
import { useState } from 'react';
import { boardDefault } from './Words';

export const AppContext = createContext();
function App() {
  //Import from words file so that matrix state can be changed
  const [board,setBoard] = useState(boardDefault);
  

  

  return (
    <div className="App">
      <Navbar/>
      {/**Access to states inside components */}
      <AppContext.Provider value={{board,setBoard}}>
        <Grid/>
        <Keyboard/>

      </AppContext.Provider>
      

    </div>
  );
}

export default App;
