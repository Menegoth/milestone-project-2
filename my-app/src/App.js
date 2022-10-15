import React from 'react'
import './App.css';
import Home from './views/home';
import Navbar from './Components/navbar';
import Post from './Components/posts';



function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Post />
    </div>
  );
}

export default App;
