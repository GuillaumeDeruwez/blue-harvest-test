import React from 'react';
import './App.css';
import { PollCreation } from './features/poll/PollCreation'
import { PollVoting } from './features/poll/PollVoting'
import { PollChart } from './features/poll/pollChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PollCreation />
        <PollVoting />
        <div style={{ width: 200, height: 200 }}>
          <PollChart />
        </div>
      </header>
    </div>
  );
}

export default App;
