
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ShowRouter from './routers/routers';
import { useRef } from 'react';

function App() {
  return (
    <BrowserRouter>
      <ShowRouter/>
    </BrowserRouter>
  );
}

export default App;
