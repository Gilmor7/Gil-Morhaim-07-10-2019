import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages imports
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';

// Components imports
import NavBar from './components/NavBar';

function App() {
  return (

    <Router>
      <NavBar />
      <Route exact path='/' component={WeatherPage} />
      <Route path='/favorites' component={FavoritesPage} />
    </Router>
  );
}

export default App;
