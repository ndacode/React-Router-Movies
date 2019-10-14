import React, { useState } from 'react';
import MovieList from 'client/src/Movies/MovieList.js';
import Movie from 'client/src/Movies/Movie'
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
        <Route path = '/movie/:id' component = {Movie}/>
      </div>
    </div>
  );
};

export default App;
