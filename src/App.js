import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styled from 'styled-components';

// Pages imports
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';

// Components imports
import PageWrapper from './components/PageWrapper';

function App() {

  // useEffect(() => {

  // }, [input])
  console.log('app rendered')

  return (
    <Router>
      <PageWrapper>
        <Route exact path='/' component={WeatherPage} />
        <Route path='/favorites' component={FavoritesPage} />
      </PageWrapper>
    </Router>
  );
}

export default App;



