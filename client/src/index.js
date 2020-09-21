import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"; 
import { Provider } from "react-redux"; //this connects the Store with the Components via Provider
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
// import Videos from './components/Videos';
import ListDayOne from './components/ListDayOne';
import CreateDayOne from './components/CreateDayOne';
import Login from './components/Login';
import Registration from './components/Registration';
import reducer from "./reducers/reducer";
import BaseLayout2 from './components/layout/BaseLayout2'
import 'bootstrap/dist/css/bootstrap.min.css';


//this createStore function will create the store in Redux in order to have a global state to put things in
//reducer function goes in this function
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

ReactDOM.render(

  //the Provider provides access to the global state in Redux to the React application. Any component will have access to global state
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout2>
    <Switch>

        {/* This view is the Homepage */}
        <Route exact path='/' component={Homepage}/>

        {/* This view is where use will choose a movement from the dropdown menu */}
        <Route path='/CreateDayOne' component={CreateDayOne}/>

        <Route path='/ListDayOne' component={ListDayOne}/>

        <Route path='/Login' component={Login}/> 

        <Route path='/Registration' component={Registration}/> 

        {/* This view has the training volume graph */}
        {/* <Route path='/Stats' component={Statistics}/> */}

        {/* <Route path='/Video' component={Videos}/>  */}

      </Switch>
    </BaseLayout2>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
