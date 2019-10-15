import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList.js';
import MovieCard from './Movies/MovieCard'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <div>
        <Route exact path = "/" component = {MovieList}/>
        <Route  path = '/movie/:id' component = {MovieCard}/>
      </div>
    </div>
  );
};

export default App;
