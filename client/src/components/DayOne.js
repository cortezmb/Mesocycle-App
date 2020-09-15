import React, { Component } from 'react'
import { connect } from 'react-redux'
// import RepMaxInput from './RepMaxInput';
import { chooseInclinePush } from '../actions/ChooseMovement';
import { chooseChestIsolation } from '../actions/ChooseMovement';
import { chooseHorizontalPush } from '../actions/ChooseMovement';
import { chooseRearOrSideDelts } from '../actions/ChooseMovement';
import { chooseHorizontalPull } from '../actions/ChooseMovement';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import'./layout/BaseLayoutStyle.css';


class DayOne extends Component {

    constructor() {

        super();

        this.state = {

        inclinePush: [],

        chestIsolation: [],

        horizontalPush: [],

        rearOrSideDelts: [],

        horizontalPull: [],

        dropdownInclinePushValue: "Incline Medium Grip Bench Press",

        dropdownChestIsolationValue: "Flat Dumbbell Flye",

        dropdownHorizontalPushValue: "Medium Grip Bench Press",

        dropdownRearOrSideDeltsValue: "Barbell Facepull",

        dropdownHorizontalPullValue: "Barbell Bent Over Row"

        }
    }

    //componentDidMount() Runs after the first render() lifecycle 
    //async/await helps writing asynchronous code in a way that looks synchronous
    componentDidMount = async () => {

        let response = await fetch('/api');

        let serverData = await response.json();

        console.log(serverData)

        this.setState({

            inclinePush: serverData.inclinePushResults,
            chestIsolation: serverData.chestIsolationResults,
            horizontalPush: serverData.horizontalPushResults,
            rearOrSideDelts: serverData.rearOrSideDeltsResults,
            horizontalPull: serverData.horizontalPullResults

        }, () => {
            
            console.log(this.state.inclinePush, this.state.chestIsolation, this.state.horizontalPush, this.state.rearOrSideDelts, this.state.horizontalPull)
        })
    }

    handleChange = (e) => {

        console.log(e.target.value)

        this.setState(
            {
                dropdownInclinePushValue: e.target.value,
                dropdownChestIsolationValue: e.target.value,
                dropdownHorizontalPushValue: e.target.value,
                dropdownRearOrSideDeltsValue: e.target.value,
                dropdownHorizontalPullValue: e.target.value
        });
    }

    handleSubmitInclinePush = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let inclinePushExercise = {

            name: this.state.dropdownInclinePushValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addInclinePush(inclinePushExercise);
    }
    handleSubmitChestIsolation = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let chestIsolationExercise = {

            name: this.state.dropdownChestIsolationValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addChestIsolation(chestIsolationExercise)
    }

    handleSubmitHorizontalPush = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let horizontalPushExercise = {

            name: this.state.dropdownHorizontalPushValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addHorizontalPush(horizontalPushExercise)
    }

    handleSubmitRearOrSideDelts = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let rearOrSideDeltsExercise = {

            name: this.state.dropdownRearOrSideDeltsValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addSideOrRearDelts(rearOrSideDeltsExercise)
    }

    handleSubmitHorizontalPull = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let horizontalPullExercise = {

            name: this.state.dropdownHorizontalPullValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addHorizontalPull(horizontalPullExercise)
    }

  render() {

        let inclinePushArray = this.state.inclinePush.map((inclinePushName, index) => {

        return <option className="" key={index} ref={inclinePushName.exercise} value={inclinePushName.exercise}>{inclinePushName.exercise}</option>
     
        });

        let chestIsolationArray = this.state.chestIsolation.map((chestIsolationName, index) => {

        return <option key={index} ref={chestIsolationName.exercise} value={chestIsolationName.exercise} >{chestIsolationName.exercise}</option> 
           
        });

        let horizontalPushArray = this.state.horizontalPush.map((horizontalPushName, index) => {

        return <option key={index} ref={horizontalPushName.exercise} value={horizontalPushName.exercise} >{horizontalPushName.exercise}</option> 
               
            });

        let rearOrSideDeltsArray = this.state.rearOrSideDelts.map((rearOrSideDeltsName, index) => {

        return <option key={index} ref={rearOrSideDeltsName.exercise} value={rearOrSideDeltsName.exercise} >{rearOrSideDeltsName.exercise}</option> 
               
            });

        let horizontalPullArray = this.state.horizontalPull.map((horizontalPullName, index) => {

        return <option key={index} ref={horizontalPullName.exercise} value={horizontalPullName.exercise} >{horizontalPullName.exercise}</option> 
               
            });

    return (
        <>
            <div className="container">
                <div className="row mainBody dropDownMenu col-sm col-md col-lg col-xl "> 
                    <div className="col">
                        <form className="formStyle1" onSubmit={this.handleSubmitInclinePush}>                        
                                <div className="dropdown">
                                    <label className="category font">Incline Push</label>
                                    <label>
                                        <select className="select font" value={this.state.dropdownInclinePushValue} onChange={this.handleChange}>
                                        {inclinePushArray}
                                        </select>
                                    </label>
                                    <input className="submit font" type="submit" value="Submit" />                             
                                </div>
                        </form>
                        
                        <form className="formStyle2" onSubmit={this.handleSubmitChestIsolation}>
                            <div className="dropdown">
                                <label className="category font">Chest Isolation</label>
                                <label>
                                    <select className="select font" value={this.state.dropdownChestIsolationValue} onChange={this.handleChange}>
                                    {chestIsolationArray}
                                    </select>
                                </label>
                                <input className="submit font" type="submit" value="Submit" />
                            </div>
                        </form> 

                        <form className="formStyle1" onSubmit={this.handleSubmitHorizontalPush}>
                            <div className="dropdown">
                                <label className="category font">Horizontal Push</label>
                                <label>
                                    <select className="select font" value={this.state.dropdownHorizontalPushValue} onChange={this.handleChange}>
                                    {horizontalPushArray}
                                    </select>
                                </label>
                                <input className="submit font" type="submit" value="Submit" />
                            </div>
                        </form> 

                        <form className="formStyle2" onSubmit={this.handleSubmitRearOrSideDelts}>
                            <div className="dropdown">
                                <label className="category font">Rear or Side Delts</label>
                                <label>
                                    <select className="select font" value={this.state.dropdownRearOrSideDeltsValue} onChange={this.handleChange}>
                                    {rearOrSideDeltsArray}
                                    </select>
                                </label>
                                <input className="submit font" type="submit" value="Submit" />
                            </div>
                        </form> 

                        <form className="formStyle1" onSubmit={this.handleSubmitHorizontalPull}>
                            <div className="dropdown">
                                <label className="category font">Horizontal Pull</label>
                                <label>
                                    <select className="select font" value={this.state.dropdownHorizontalPullValue} onChange={this.handleChange}>
                                    {horizontalPullArray}
                                    </select>
                                </label>
                                <input className="submit font" type="submit" value="Submit" />
                            </div>
                        </form> 
                    </div>
                    {/* <div className="col">
                        <RepMaxInput />
                    </div> */}
                </div>
                <div className="font m-3 d-flex justify-content-center">
                    <Link to="/RepMaxInput" className="continueButton">Continue</Link>      
                </div>
            </div> 
            {/* {results} */}
        </>
        )
    }
}

//this function is going to take in a dipatch parameter
//dispatch is a function that sends a message to the store
const mapDispatchToProps = (dispatch) => {

    return {
      //the onIncrement function is returning a function named dispatch. 
      //dispatch function needs to be wrapped in a function so it doesn't automatically execute
      addInclinePush: (inclinePushExercise) => dispatch(chooseInclinePush(inclinePushExercise)),
      addChestIsolation: (chestIsolationExercise) => dispatch(chooseChestIsolation(chestIsolationExercise)),
      addHorizontalPush: (horizontalPushExercise) => dispatch(chooseHorizontalPush(horizontalPushExercise)),
      addSideOrRearDelts: (rearOrSideDeltsExercise) => dispatch(chooseRearOrSideDelts(rearOrSideDeltsExercise)),
      addHorizontalPull: (horizontalPullExercise) => dispatch(chooseHorizontalPull(horizontalPullExercise))
    }
  }
  
  export default connect(null, mapDispatchToProps)(DayOne)//connects App component to the provider  
