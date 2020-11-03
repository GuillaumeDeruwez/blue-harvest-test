import React from 'react';
import logo from './logo.svg';
import { Test } from './features/test/Test';
import { AddQuestionForm } from './features/test/AddQuestionForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <AddQuestionForm />
      </header>
    </div>
  );
}

export default App;
