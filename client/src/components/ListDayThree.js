import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListDayOne extends Component {

  constructor() {

    super();

    this.state = {

      user_id: 1,

      inclinePush: [],

      chestIsolation: [],

      horizontalPush: [],

      rearOrSideDelts: [],

      horizontalPull: [],

      inclinePushVideo: [],

      chestIsolationVideo: [],

      horizontalPushVideo: [],

      rearOrSideDeltsVideo: [],

      horizontalPullVideo: []
    }
  }

  componentDidMount = async () => {

    let response = await fetch('/createExercises/1');

    let serverData = await response.json();

    let videoResponse = await fetch('/listExercises');

    let videoData = await videoResponse.json();

    console.log(videoData)
    this.setState({

        inclinePush: serverData.inclinePushResults,
        chestIsolation: serverData.chestIsolationResults,
        horizontalPush: serverData.horizontalPushResults,
        rearOrSideDelts: serverData.rearOrSideDeltsResults,
        horizontalPull: serverData.horizontalPullResults,

        inclinePushVideo: videoData.inclinePushResults,
        chestIsolationVideo: videoData.chestIsolationResults,
        horizontalPushVideo: videoData.horizontalPushResults,
        rearOrSideDeltsVideo: videoData.rearOrSideDeltsResults,
        horizontalPullVideo: videoData.horizontalPullResults
    
    //,() => { ensures that it only makes 1 request
    }, () => {
      console.log(this.state.inclinePush, this.state.chestIsolation, this.state.horizontalPush, this.state.rearOrSideDelts, this.state.horizontalPull, this.state.inclinePushVideo)

    })
  }

  render() {

    let num = .85;
    let ten = 10;

    let inclinePushArray = this.state.inclinePush.map((inclinePushName, index) => {

      return <> 
              <tr key={index} data-inclinepush-exercise ={inclinePushName.exercise} data-inclinepush-weight ={inclinePushName.weight} >
                <td>{inclinePushName.exercise}</td>
                <td>{Math.round((inclinePushName.weight * num) / ten)* ten}</td>
                <td>3</td>
                <td>12 - 20</td>
                <td>3</td>
                {/* <td><a href={'https://youtu.be/MDuOnEyof1w'}>Incline Wide Grip Bench Press</a></td> */}
              </tr>
            </>         
      });

    //A failed attemp to embed a array iteration inside of another
    // let inclinePushArray = this.state.inclinePush.map((inclinePushName, index) => {

    //   return <> 
    //             <tr key={index} data-inclinepush-exercise = {inclinePushName.exercise} data-inclinepush-weight={inclinePushName.weight}>
    //               <td>{inclinePushName.exercise}</td>
    //               <td>{Math.round((inclinePushName.weight * num) / ten) * ten}</td>
    //               <td>3</td>
    //               <td>12 - 20</td>
    //               <td>3</td>
    //               <td>
    //               {this.state.inclinePushVideo.lastIndexof((item, ) => {
    //                 return (
    //                 <td key = {inclinePushVideoName} data-inclinepush-video = {inclinePushVideoName.link}><a href={inclinePushVideoName.link}>{inclinePushName.exercise}</a></td>
    //                 );
    //               })};
    //               </td>
    //             </tr>
    //         </>
    // });

    let chestIsolationArray = this.state.chestIsolation.map((chestIsolationName, index) => {

      return <> 
              <tr key={index} data-chestisolation-exercise ={chestIsolationName.exercise} data-chestisolation-weight ={chestIsolationName.weight} >
                <td>{chestIsolationName.exercise}</td>
                <td>{Math.round((chestIsolationName.weight * num) / ten)* ten}</td>
                <td>3</td>
                <td>12 - 20</td>
                <td>3</td>
                {/* <td><a href={'https://youtu.be/MDuOnEyof1w'}>Incline Wide Grip Bench Press</a></td> */}
              </tr>
            </>         
      });

    let horizontalPushArray = this.state.horizontalPush.map((horizontalPushName, index) => {

      return <> 

              <tr key={index} data-horizontalpush-exercise ={horizontalPushName.exercise} data-horizontalpushweight ={horizontalPushName.weight} >
                <td>{horizontalPushName.exercise}</td>
                <td>{Math.round((horizontalPushName.weight * num) / ten) * ten}</td>
                <td>3</td>
                <td>12 - 20</td>
                <td>3</td>
                {/* <td><a href={'https://youtu.be/MDuOnEyof1w'}>Incline Wide Grip Bench Press</a></td> */}
              </tr>
            </>         
      });

    let rearOrSideDeltsArray = this.state.rearOrSideDelts.map((rearOrSideDeltsName, index) => {

      return <> 

              <tr key={index} data-rearOrSideDelts-exercise ={rearOrSideDeltsName.exercise} data-rearOrSideDeltsweight ={rearOrSideDeltsName.weight} >
                <td>{rearOrSideDeltsName.exercise}</td>
                <td>{Math.round((rearOrSideDeltsName.weight * num) / ten) * ten}</td>
                <td>3</td>
                <td>12 - 20</td>
                <td>3</td>
                {/* <td><a href={'https://youtu.be/MDuOnEyof1w'}>Incline Wide Grip Bench Press</a></td> */}
              </tr>
            </>         
      });

    let horizontalPullArray = this.state.horizontalPull.map((horizontalPullName, index) => {

      return <> 

              <tr key={index} data-horizontalPull-exercise ={horizontalPullName.exercise} data-horizontalPullweight ={horizontalPullName.weight} >
                <td>{horizontalPullName.exercise}</td>
                <td>{Math.round((horizontalPullName.weight * num) / ten) * ten}</td>
                <td>3</td>
                <td>12 - 20</td>
                <td>3</td>
                {/* <td><a href={'https://youtu.be/MDuOnEyof1w'}>Incline Wide Grip Bench Press</a></td> */}
              </tr>
            </>         
      });

    return (
      <>
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <h1 className="h3 mb-2 text-gray-800">Week 1</h1>
          <p className="mb-4">Rest 1-1/2 minutes to 2-1/2 minutes between sets. </p>

          {/* <!-- DataTales Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Day 1</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Exercise</th>
                      <th>Weight</th>
                      <th># of Sets</th>
                      <th>Rep Range</th>
                      <th>Reps Left Until Fail</th>
                      {/* <th>How To Video</th> */}
                    </tr>
                  </thead>
                  {/* <tfoot>
                    <tr>
                    <th>Exercise</th>
                      <th>Weight lbs</th>
                      <th># of Sets</th>
                      <th>Rep Range</th>
                      <th>Reps Left Until Fail</th>
                      <th>How To Video</th> 
                    </tr>
                  </tfoot> */}
                  <tbody className="text-center">

                      {inclinePushArray}

                      {chestIsolationArray} 

                      {horizontalPushArray} 

                      {rearOrSideDeltsArray}

                      {horizontalPullArray}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {

    return {

        inputWeight1: state.weight1,
        inputWeight2: state.weight2,
        inclinePushMove: state.inclinePushMovement.name,
        chestIsolationMove: state.chestIsolationMovement.name
    }
}

export default connect(mapStateToProps, null)(ListDayOne) //connects App component to the provider
