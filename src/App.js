import React from 'react';
import './App.css';
import { PollCreation } from './features/poll/poll-creation/PollCreation'
import { PollVoting } from './features/poll/poll-voting/PollVoting'
import { PollChart } from './features/poll/poll-chart/pollChart'

function App() {
  return (
    <div className="App" >

      <header className="App-Header">
        <h1 className="App-Header-Content" >Sir Vote-a-lot</h1>
      </header>

      <section className="section">
          <div className="col">
            <PollCreation/>
          </div>
          <div className="col">
            <PollVoting />
          </div>
          <div className="col">
            <PollChart />
          </div>
      </section>

    </div>
  );
}

export default App;
