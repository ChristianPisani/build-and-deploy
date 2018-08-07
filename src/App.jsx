import React, { Fragment } from 'react';
import PosterGrid from './PosterGrid';
import AppBar from './AppBar';

// This is the outermost component for our app.
// It's responsible for the app layout and other global, non-visual elements
const App = () => (
  // Fragment is just a special wrapper from React that allows us to have
  // two components side-by-side without wrapping them in a <div> element
  <Fragment>
    <AppBar />
    <PosterGrid />
  </Fragment>
);

export default App;
