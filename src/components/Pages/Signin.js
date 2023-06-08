import React,{Component} from 'react'
import Axios from 'axios'
import './styles/Signin.css';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/login';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

const Signin = props => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login());
  }
  
    return(
    <div className="Auth-form-container bg-image">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username" 
              className="form-control mt-1"
              placeholder="Username" required style={{width:'320px'}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password" 
              className="form-control mt-1"
              placeholder="e.g rXhAz29$%1" required style={{width:'320px'}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="Home">password?</a>
          </p>
        </div>
      </form>
    </div>
    );
    }


export default Signin