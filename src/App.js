import React from 'react';
import './App.css';
import Contact from './component/Contact'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
}

export default App;
