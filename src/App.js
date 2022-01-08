
import './App.css';
import LoginUser from './components/login';
import RegisterUser from './components/register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

import Home from './pages/home';
import NavBar from './components/navBar' ;
import Details from './pages/details';
import FavFilms from './pages/favouriteFilm';
import { LanguageContext } from './context/changeLanguage';
import { useState } from 'react';

import AllMovies from './pages/allMovies'


function App() {
  console.log(LanguageContext)

  const [contextLang,setContextLang] = useState("en")
  return (

    <LanguageContext.Provider value={{contextLang,setContextLang}}>
      
    <Router>
      
      <NavBar/>

      <Switch>
      <Route path={"/films"} exact component={Home}></Route>
      <Route path={"/allMovies"} exact component={AllMovies}></Route>
      <Route path={"/login"} exact component={LoginUser}></Route>
      <Route path={"/signup"} exact component={RegisterUser}></Route>
      <Route path={"/films/:id"} exact component={Details}></Route>
      <Route path={"/favFilms"} exact component={FavFilms}></Route>

      </Switch>

     

    </Router>
    </LanguageContext.Provider>


  );
}

export default App;
