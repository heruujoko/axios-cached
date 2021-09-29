import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getPosts, addNewPost, patchPost } from './services/dataService';
import { loadAllPosts } from './lib/actions/post-action-creator';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts();
  }, [])

  function fetchPostsByRedux() {
    dispatch(loadAllPosts());
  }

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
        <br />
        <button onClick={() => {fetchPostsByRedux()}}>refetch REDUX</button>
      </header>
    </div>
  );
}

export default App;
