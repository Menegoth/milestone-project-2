import React from 'react'
import './App.css';
import Home from './views/home';
import Posts from '../src/Components/Posts';



function App() {
  return (
    <div className="App">
      <Home />
      <Posts 
        title='Title'
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD9GFAnj8-B3YNPw8S0raHHHhxd56H8Wh4Q&usqp=CAU'
        description='hello this is the text for the posts!'
        />
      <Posts 
        title=''
        imgUrl=''
        description=''
        />

      <Posts />
    </div>
  );
}

export default App;
