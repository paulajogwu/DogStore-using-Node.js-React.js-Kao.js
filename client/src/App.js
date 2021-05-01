import React,{useState} from 'react';

import {UserContext} from './components/context/UserContext';

import Admin from './components/admin/Dashboard';


import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Modal from './components/Modal';
import Favourite from './components/pages/favourite';

import Doglist from './components/Doglist';
import DogDetail from './components/pages/DogDetail';

import Search from './components/pages/Search';

import Admins from "./components/admin/pages/AddDog";
import Chat from "./components/admin/pages/chat";
import DogView from "./components/admin/pages/DogView";
import Loction from "./components/admin/pages/locations";


function App() {
  let [email, setEmail] = useState("");
  //let [password, setPassword] = useState("");
  return (
    <>
  
    <UserContext.Provider value= {{email, setEmail}}>
      <Router>
       
       
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Home' exact component={Home} />
        
          <Route path='/services' component={Services} />
          <Route path='/Search/:breed' component={Search} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/DogDetail/:id' component={DogDetail} />
          <Route path='/favourite' component={Favourite} />
          <Route path='/doglist' component={Doglist} />
          <Route path='/chat' component={Modal} />
          <Route path='/admin'  component={Admin} />

        </Switch>
      </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
