import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPosts, addNewPost, patchPost } from './services/dataService';

function App() {

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          do action to invalidate cache, check network tab to ensure it
        </p>
        <button onClick={() => {addNewPost()}}>Action POST</button>
        <br />
        <button onClick={() => {patchPost(1)}}>Action PUT</button>
        <br />
        <button onClick={() => {getPosts()}}>refetch</button>
      </header>
    </div>
  );
}

export default App;
