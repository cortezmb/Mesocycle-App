import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { chooseInclinePush, increaseMaxHorizontalPull, increaseMaxHorizontalPush, increaseMaxRearOrSideDelts } from '../actions/DayOneAction';
import { chooseChestIsolation } from '../actions/DayOneAction';
import { chooseHorizontalPush } from '../actions/DayOneAction';
import { chooseRearOrSideDelts } from '../actions/DayOneAction';
import { chooseHorizontalPull } from '../actions/DayOneAction';
import { increaseMaxInclinePush} from '../actions/DayOneAction';
import { increaseMaxChestIsolation} from '../actions/DayOneAction';
import { Link } from "react-router-dom";
import'./layout/BaseLayoutStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class CreateDayOne extends Component {

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

        let response = await fetch('/listExercises');

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

    handleSubmitInclinePush = async (e) => {

        e.preventDefault();   

            
        let inclinePushExercise = {

            exercise: this.state.dropdownInclinePushValue,
            weight: this.refs.weight1.value,
            category_id: this.refs.category14.value
        }
        
        console.log(inclinePushExercise)

        let response = await axios({

            method: "post",
            url: '/createExercises',
            data: inclinePushExercise,
            headers: {'Content-Type': 'application/json'}
        })
        console.log("I'm posting to a server")
        console.log(response)

        //collect the data from the form 
        //this uploads data to the global store
        this.props.addInclinePush(
            {
            inclinePushExercise: inclinePushExercise,
            pounds: this.refs.weight1.value
            });
    }

    handleSubmitChestIsolation = async (e) => {

        e.preventDefault();   

            
        let chestIsolationExercise = {

            exercise: this.state.dropdownChestIsolationValue,
            weight: this.refs.weight2.value,
            category_id: this.refs.category5.value
        }
        
        console.log(chestIsolationExercise)

        let response = await axios({

            method: "post",
            url: '/createExercises',
            data: chestIsolationExercise,
            headers: {'Content-Type': 'application/json'}
        })
        console.log("I'm posting to a server")
        console.log(response)

        //collect the data from the form 
        //this uploads data to the global store
        this.props.addChestIsolation(
            {
            chestIsolationExercise: chestIsolationExercise,
            pounds: this.refs.weight2.value
            });
    }

    handleSubmitHorizontalPush = async (e) => {

        e.preventDefault();   

            
        let horizontalPushExercise = {

            exercise: this.state.dropdownHorizontalPushValue,
            weight: this.refs.weight3.value,
            category_id: this.refs.category11.value
        }
        
        console.log(horizontalPushExercise)

        let response = await axios({

            method: "post",
            url: '/createExercises',
            data: horizontalPushExercise,
            headers: {'Content-Type': 'application/json'}
        })
        console.log("I'm posting to a server")
        console.log(response)

        //collect the data from the form 
        //this uploads data to the global store
        this.props.addHorizontalPush(
            {
            horizontalPushExercise: horizontalPushExercise,
            pounds: this.refs.weight3.value
            });
    }

    handleSubmitRearOrSideDelts = async (e) => {

        e.preventDefault();   

            
        let rearOrSideDeltsExercise = {

            exercise: this.state.dropdownRearOrSideDeltsValue,
            weight: this.refs.weight4.value,
            category_id: this.refs.category17.value
        }
        
        console.log(rearOrSideDeltsExercise)

        let response = await axios({

            method: "post",
            url: '/createExercises',
            data: rearOrSideDeltsExercise,
            headers: {'Content-Type': 'application/json'}
        })
        console.log("I'm posting to a server")
        console.log(response)

        //collect the data from the form 
        //this uploads data to the global store
        this.props.addRearOrSideDelts(
            {
            rearOrSideDeltsExercise: rearOrSideDeltsExercise,
            pounds: this.refs.weight4.value
            });
    }

    handleSubmitHorizontalPull = async (e) => {

        e.preventDefault();   

            
        let horizontalPullExercise = {

            exercise: this.state.dropdownHorizontalPullValue,
            weight: this.refs.weight5.value,
            category_id: this.refs.category10.value
        }
        
        console.log(horizontalPullExercise)

        let response = await axios({

            method: "post",
            url: '/createExercises',
            data: horizontalPullExercise,
            headers: {'Content-Type': 'application/json'}
        })
        console.log("I'm posting to a server")
        console.log(response)

        //collect the data from the form 
        //this uploads data to the global store
        this.props.addHorizontalPull(
            {
            horizontalPullExercise: horizontalPullExercise,
            pounds: this.refs.weight5.value
            });
    }

  render() {

        let inclinePushArray = this.state.inclinePush.map((inclinePushName, index) => {

        return <option className="" key={index} ref={inclinePushName.exercise} value={inclinePushName.exercise} data-user_id={inclinePushName.user_id} data-exercise_id={inclinePushName.exercise_id}  name="theInput" data-category_id={14} data-link={inclinePushName.link} >{inclinePushName.exercise}</option>     
        });

        let chestIsolationArray = this.state.chestIsolation.map((chestIsolationName, index) => {

        // return <option className="" key={index} ref={chestIsolationName.exercise} value={chestIsolationName.exercise} >{chestIsolationName.exercise}</option> 
        return <option className="" key={index} ref={chestIsolationName.exercise} value={chestIsolationName.exercise} data-user_id={chestIsolationName.user_id} data-exercise_id={chestIsolationName.exercise_id}  name="theInput" data-category_id={5} data-link={chestIsolationName.link} >{chestIsolationName.exercise}</option>          
        });

        let horizontalPushArray = this.state.horizontalPush.map((horizontalPushName, index) => {

        // return <option key={index} ref={horizontalPushName.exercise} value={horizontalPushName.exercise} >{horizontalPushName.exercise}</option> 
        return <option className="" key={index} ref={horizontalPushName.exercise} value={horizontalPushName.exercise} data-user_id={horizontalPushName.user_id} data-exercise_id={horizontalPushName.exercise_id}  name="theInput" data-category_id={11} data-link={horizontalPushName.link} >{horizontalPushName.exercise}</option>      
            });

        let rearOrSideDeltsArray = this.state.rearOrSideDelts.map((rearOrSideDeltsName, index) => {

        // return <option key={index} ref={rearOrSideDeltsName.exercise} value={rearOrSideDeltsName.exercise} >{rearOrSideDeltsName.exercise}</option> 
        return <option className="" key={index} ref={rearOrSideDeltsName.exercise} value={rearOrSideDeltsName.exercise} data-user_id={rearOrSideDeltsName.user_id} data-exercise_id={rearOrSideDeltsName.exercise_id}  name="theInput" data-category_id={17} data-link={rearOrSideDeltsName.link} >{rearOrSideDeltsName.exercise}</option>           
            });

        let horizontalPullArray = this.state.horizontalPull.map((horizontalPullName, index) => {

        // return <option key={index} ref={horizontalPullName.exercise} value={horizontalPullName.exercise} >{horizontalPullName.exercise}</option> 
        return <option className="" key={index} ref={horizontalPullName.exercise} value={horizontalPullName.exercise} data-user_id={horizontalPullName.user_id} data-exercise_id={horizontalPullName.exercise_id}  name="theInput" data-category_id={10} data-link={horizontalPullName.link} >{horizontalPullName.exercise}</option>                 
            });

    return (
        <>
        <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-2 text-gray-800">Day 1 Workout Setup</h1>
            <p className="mb-4">You will do these same movements each week with an increasing weight.  </p>
        </div>    


        {/* Cards Start Here */}
            <div className="row">

                <div className="col-lg-6">

                    {/* <!-- Start Card --> */}
                    <div className="card shadow mb-4 border-left-dark">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-danger">Incline Push - Choose Exercise & Input 10RM</h6>
                        </div>

                        <div className="card-body">

                            <form className="form-inline" action="/action_page.php" onSubmit={this.handleSubmitInclinePush}>
                                <div className="form-group">
                                    
                                    <select className="form-control" id="sel1" value={this.state.dropdownInclinePushValue} onChange={this.handleChange}>
                                        {inclinePushArray}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input className="submit font form-control" ref="weight1" type="text" placeholder="10RM" />
                                    <input type="hidden" name="theInputGroup" ref="category14" value="14" />
                                </div>
                                <button className="continueButton btn-circle m-1" type="submit" value="submit"><a href="styling/fontawesome-free-5.13.1-web/css" className="continueButton"><i className="fas fa-check"></i></a></button>
                            </form>
                        </div>
                    </div>

                    {/* <!-- Start Card --> */}
                    <div className="card shadow mb-4 border-left-dark">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-danger">Chest Isolation - Choose Exercise & Input 10RM</h6>
                        </div>

                        <div className="card-body">

                            <form className="form-inline" action="/action_page.php" onSubmit={this.handleSubmitChestIsolation}>
                                <div className="form-group">
                                    
                                    <select className="form-control" id="sel1" value={this.state.dropdownChestIsolationValue} onChange={this.handleChange}>
                                        {chestIsolationArray}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input className="submit font form-control" ref="weight2" type="text" placeholder="10RM" />
                                    <input type="hidden" name="theInputGroup" ref="category5" value="5" />
                                </div>
                                <button className="continueButton btn-circle m-1" type="submit" value="submit"><a href="styling/fontawesome-free-5.13.1-web/css" className="continueButton"><i className="fas fa-check"></i></a></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    {/* <!-- Start Card --> */}
                    <div className="card shadow mb-4 border-left-dark">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-danger">Horizontal Push - Choose Exercise & Input 10RM</h6>
                        </div>

                        <div className="card-body">

                            <form className="form-inline" action="/action_page.php" onSubmit={this.handleSubmitHorizontalPush}>
                                <div className="form-group">
                                    
                                    <select className="form-control" id="sel1" value={this.state.dropdownHorizontalPushValue} onChange={this.handleChange}>
                                        {horizontalPushArray}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input className="submit font form-control" ref="weight3" type="text" placeholder="10RM" />
                                    <input type="hidden" name="theInputGroup" ref="category11" value="11" />
                                </div>
                                <button className="continueButton btn-circle m-1" type="submit" value="submit"><a href="styling/fontawesome-free-5.13.1-web/css" className="continueButton"><i className="fas fa-check"></i></a></button>
                            </form>
                        </div>
                    </div>

                    {/* <!-- Start Card --> */}
                    <div className="card shadow mb-4 border-left-dark">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-danger">Rear or Side Delts - Choose Exercise & Input 10RM</h6>
                        </div>

                        <div className="card-body">

                            <form className="form-inline" action="/action_page.php" onSubmit={this.handleSubmitRearOrSideDelts}>
                                <div className="form-group">
                                    
                                    <select className="form-control" id="sel1" value={this.state.dropdownRearOrSideDeltsValue} onChange={this.handleChange}>
                                        {rearOrSideDeltsArray}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input className="submit font form-control" ref="weight4" type="text" placeholder="10RM" />
                                    <input type="hidden" name="theInputGroup" ref="category17" value="17" />
                                </div>
                                <button className="continueButton btn-circle m-1" type="submit" value="submit"><a href="styling/fontawesome-free-5.13.1-web/css" className="continueButton"><i className="fas fa-check"></i></a></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                     {/* <!-- Start Card --> */}
                     <div className="card shadow mb-4 border-left-dark">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-danger">Horizontal Pull - Choose Exercise & Input 10RM</h6>
                        </div>

                        <div className="card-body">

                            <form className="form-inline" action="/action_page.php" onSubmit={this.handleSubmitHorizontalPull}>
                                <div className="form-group">
                                    
                                    <select className="form-control" id="sel1" value={this.state.dropdownHorizontalPullValue} onChange={this.handleChange}>
                                        {horizontalPullArray}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input className="submit font form-control" ref="weight5" type="text" placeholder="10RM" />
                                    <input type="hidden" name="theInputGroup" ref="category10" value="10" />
                                </div>
                                <button className="continueButton btn-circle m-1" type="submit" value="submit"><a href="styling/fontawesome-free-5.13.1-web/css" className="continueButton"><i className="fas fa-check"></i></a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
      addInclinePush: (inclinePushExercise, pounds) => dispatch(chooseInclinePush(inclinePushExercise), increaseMaxInclinePush(pounds)),
      addChestIsolation: (chestIsolationExercise, pounds) => dispatch(chooseChestIsolation(chestIsolationExercise), increaseMaxChestIsolation(pounds)),
      addHorizontalPush: (horizontalPushExercise, pounds) => dispatch(chooseHorizontalPush(horizontalPushExercise), increaseMaxHorizontalPush(pounds)),
      addRearOrSideDelts: (rearOrSideDeltsExercise, pounds) => dispatch(chooseRearOrSideDelts(rearOrSideDeltsExercise), increaseMaxRearOrSideDelts(pounds)),
      addHorizontalPull: (horizontalPullExercise, pounds) => dispatch(chooseHorizontalPull(horizontalPullExercise), increaseMaxHorizontalPull(pounds))
    }
  }
  
  export default connect(null, mapDispatchToProps)(CreateDayOne)//connects App component to the provider  
