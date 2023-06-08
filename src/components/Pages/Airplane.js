import React from 'react'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {toast} from 'react-toastify';
import Sidebar from './Sidebar';
import './styles/Tables.css'
import { useSelector, useDispatch } from 'react-redux';
import { delAirplaneData, editAirplaneData } from '../../store/slices/airplane-data';

const Airplane = () => {
  const dispatch = useDispatch();
  const cliendData = useSelector(state => state.airplane.data);
  
  return (
    <>
      <Sidebar/>
      <div>
        <Link to='/AddEditAirplane' onClick={() => {dispatch(editAirplaneData(null))}}>
          <button style={{width:"120px", marginLeft:"810px"}} className='btn btn-client'>Add Airplane</button>
        </Link>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{textAlign:'center'}}>S. No</th>
              <th style={{textAlign:'center'}}>Airplane ID</th>
              <th style={{textAlign:'center'}}>Max Seats</th>
              <th style={{textAlign:'center'}}>Action</th>
            </tr>
            </thead>
            <tbody>
              {cliendData.map((item,index)=>{
                return(
                  <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>{item.airplane_id}</td>
                    <td>{item.max_seats}</td>
                    <td>
                      <Link to={`/UpdateAirplane/${item.airplane_id}`}>
                        <button className='btn btn-edit' id={item.airplane_id} onClick={(e) => {dispatch(editAirplaneData(e.target.id))}}>Edit</button>
                      </Link>
                        <button className='btn btn-delete' id={item.airplane_id} onClick={(e)=> {dispatch(delAirplaneData(e.target.id))}}>Delete</button>
                      <Link to={`/ViewAirplane/${item.airplane_id}`}>
                        <button className='btn btn-view'>View</button>
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
        </table>

      </div>
    </>
  )
}

export default Airplane