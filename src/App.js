import React from 'react';
import './App.css';
import { PollCreation } from './features/poll/PollCreation'
import { PollVoting } from './features/poll/PollVoting'
import { PollChart } from './features/poll/pollChart'

function App() {
  return (
    <div className="App" >

      <header className="App-Header">
        <p className="App-Header-Content" >Sir Vote-a-lot</p>
      </header>

      <section className="section">
          <div className="col1">
            <PollCreation/>
          </div>
          <div className="col2">
            <PollVoting />
          </div>
          <div className="col3">
            <PollChart />
          </div>
      </section>

    </div>
  );
}

export default App;
