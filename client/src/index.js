import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"; 
import { Provider } from "react-redux"; //this connects the Store with the Components via Provider
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Videos from './components/Videos';
import ListDayOne from './components/ListDayOne';
import CreateDayOne from './components/CreateDayOne';
import CreateDayOneRepMaxInput from './components/CreateDayOneRepMaxInput';
import Login from './components/Login';
import Registration from './components/Registration';
import reducer from "./reducers/reducer";
import BaseLayout from './components/layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
// import RepCounter from './components/RepCounter';

// import Statistics from './components/Statistics';


//this createStore function will create the store in Redux in order to have a global state to put things in
//reducer function goes in this function
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

ReactDOM.render(

  //the Provider provides access to the global state in Redux to the React application. Any component will have access to global state
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
    <Switch>

        {/* This view is the Homepage */}
        <Route exact path='/' component={Homepage}/>

        {/* This view is where use will choose a movement from the dropdown menu */}
        <Route path='/CreateDayOne' component={CreateDayOne}/>

        <Route path='/ListDayOne' component={ListDayOne}/>

        <Route path='/Video' component={Videos}/> 

        <Route path='/Login' component={Login}/> 

        <Route path='/Registration' component={Registration}/> 

        {/* This view has the movement descriptions and 10RM input forms */}
        <Route path='/CreateDayOneRepMaxInput' component={CreateDayOneRepMaxInput}/> 

        {/* This view has the workout of the day with rep counter
        <Route path='/RepCount' component={RepCounter}/> */}

        {/* This view has the training volume graph */}
        {/* <Route path='/Stats' component={Statistics}/> */}

      </Switch>
    </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
