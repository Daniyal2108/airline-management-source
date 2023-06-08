import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import Axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getAirplaneData, editAirplaneData, delAirplaneData } from "../../store/slices/airplane-data";


const AddEditAirplane = () => {
  const data = useSelector(state => state.airplane?.obj);
  const dispatch = useDispatch();
  const [state, setState] = useState(data !== null ? data : {
    airplane_id: "",
    max_seats: "",
  });
  const { airplane_id, max_seats } = state;

  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAirplaneData(state))
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "600px",
          alignContent: "center",
          backgroundColor: "grey",
          borderRadius: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="airplane-id">Airplane ID</label>
        <input
          type="text" name="airplane_id" value={airplane_id || ""}
          placeholder="ID"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="max-seats">Max Seats</label>
        <input
          type="text" name="max_seats" value={max_seats || ""}
          placeholder="Max Seats"
          onChange={handleInputChange}
        />

        
        <input type="submit" value={"Submit"} />
        <Link to="/Airplane">
          <input type="button" value="Back"></input>
        </Link>
      </form>
    </div>
  );
};

export default AddEditAirplane;
