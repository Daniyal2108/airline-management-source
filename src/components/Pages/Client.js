import React from 'react'
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {toast} from 'react-toastify';
import Sidebar from './Sidebar';
import './styles/Tables.css'
import { useSelector, useDispatch } from 'react-redux';
import { delClientData, editClientData } from '../../store/slices/client-slice';
const Client = () => {
  const dispatch = useDispatch();
  const cliendData = useSelector(state => state.client.data);
  console.log(cliendData);
  
  
  return (
    <>
      <Sidebar/>
      <div>
        <Link to='/AddEditClient' onClick={() => {dispatch(editClientData(null))}}>
          <button className='btn btn-client'>Add Client</button>
        </Link>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{textAlign:'center'}}>S. No</th>
              <th style={{textAlign:'center'}}>Client ID</th>
              <th style={{textAlign:'center'}}>First Name</th>
              <th style={{textAlign:'center'}}>Middle Name</th>
              <th style={{textAlign:'center'}}>Last Name</th>
              <th style={{textAlign:'center'}}>Phone</th>
              <th style={{textAlign:'center'}}>Email</th>
              <th style={{textAlign:'center'}}>Passport</th>
              <th style={{textAlign:'center'}}>Action</th>
            </tr>
            </thead>
            <tbody>
              {cliendData.map((item,index)=>{
                return(
                  <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>{item.client_id}</td>
                    <td>{item.fname}</td>
                    <td>{item.mname}</td>
                    <td>{item.lname}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.passport}</td>
                    <td>
                      <Link to={`/Update/${item.client_id}`}>
                        <button className='btn btn-edit' id={item.client_id} onClick={(e) => {dispatch(editClientData(e.target.id))}}>Edit</button>
                      </Link>
                        <button className='btn btn-delete' id={item.client_id} onClick={(e)=> {dispatch(delClientData(e.target.id))}}>Delete</button>
                      <Link to={`/View/${item.client_id}`}>
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

export default Client