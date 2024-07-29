import logo from './logo.svg';
// import './App.css';
import Knight from './components/Knight';
import Square from './components/square';
import Board from './components/Board';

import { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [pos, setPos] = useState({
    posX:1,
    posY:0
  });
  return (
    <div className='app'>
      <DndProvider backend={HTML5Backend}>
       <Board knightPosition={[pos.posX, pos.posY]} setPos={setPos}/>
     </DndProvider>
    </div>
    // <Board knightPosition={[pos.posX, pos.posY]} setPos={setPos}/>
    
  );
}

export default App;
