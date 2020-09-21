import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



class Registration extends Component {
  render() {
    return (
    <>
      <body class="bg-gradient-dark">
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0"> 
              {/* <!-- Nested Row within Card Body -->*/}
              <div className="row">
                {/* <div className="col-lg-5 d-none d-lg-block bg-register-image"></div> */}
                {/* <div><img className="col-lg-or-3 d-none d-lg-block" src="images/register_image.jpg" alt=""></img></div> */}
                <div class="col-lg-6 d-none d-lg-block headerImage"></div>
                <div class="col-lg-6">
                
                {/* <div className="col-lg-6 offset-lg-3"> */}
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group row ">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name"/>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address"/>
                      </div>
                      <div className="form-group">
                      {/* <div className="form-group row"> */}
                        {/* <div className="col-sm-6 mb-3 mb-sm-0"> */}
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                        {/* </div> */}
                        {/* <div className="col-sm-6">
                          <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"/>
                        </div> */}
                      </div>
                      <a href="login.html" className="btn btn-danger btn-user btn-block">
                        Register Account
                      </a>
                      <hr/>
                      {/* <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Register with Google
                      </a>
                      <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                      </a> */}
                    </form>
                    <hr/>
                    {/* <div className="text-center">
                      <a className="small" href="forgot-password.html">Forgot Password?</a>
                    </div> */}
                    <div className="text-center">
                      <Link className="small text-dark" to="/Login2">Already have an account? Login!</Link>
                      {/* <a className="small" href="login.html">Already have an account? Login!</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
    )
  }
}

export default Registration
