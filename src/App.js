import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
import Intergration from './components/Integration/Integration'
import {BrowserRouter,Route} from 'react-router-dom'
import Items from './components/Items/Items';
import Bottom from './components/BottomBar/Bottom'
import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
    <div className="App">
    <Route path='/' component={Home}></Route>
      <Route path='/Items' component={Intergration}></Route>

    </div>
      </BrowserRouter>
    </>
  );
}

export default App;
