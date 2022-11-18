import React from 'react';
import MovieForm from "./Components/MovieClass/MovieForm/MovieForm";
import Jokes from "./Components/Jokes/Jokes/Jokes";
import MovieFormFunc from "./Components/MovieFunc/MovieFormFunc/MovieFormFunc";


function App() {

  return (
    <div className="App">
   <MovieForm />
        <Jokes/>
        <MovieFormFunc/>
    </div>
  );
}

export default App;
