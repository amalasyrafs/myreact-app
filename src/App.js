import React from 'react';
import Home from './components/Home';
import Game from './components/TicTacComponent';
import Header from './components/Header';
import RecipesApp from './components/RecipeComponent';
import WeatherApp from './components/WeatherComponent';
import Footer from './components/Footer';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/home' component={() => <Home />} />
          <Route path='/game' component={() => <Game />} />
          <Route path='/recipes' component={() => <RecipesApp />} />
          <Route path='/weather' component={() => <WeatherApp />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
