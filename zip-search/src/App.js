import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css'


function App() {

  const [zipCode, setZipcode] = useState([])
const [input, setInput]=useState("")
  let url = `http://ctp-zip-api.herokuapp.com/zip/`+input
  // call API


  const getData = async () => {
    await axios.get(url)
      .then(res => {
        setZipcode(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [input])

  const handleChange=(event)=>{
    console.log(event.target.value)
    event.preventDefault()
    setInput(event.target.value)
  }

  return (
    <div className="App">
      <h1>Zip Code Search</h1>
      {/* <input onChange={event => setZipcode(event.target.value)} /> */}
      <div className="container">
      <label for="zipCodeInput">Enter a zipcode:</label><br/>
      <input className="zipCode" onChange={handleChange}></input>
      </div>
      {/* <button onClick={fetchPost}>Update zipcode</button> */}

      <p>{zipCode.map(element => {
        return(
          <center>
        <div className="eachCity">
          <p className="cityName">City: {element.City}</p>
          <div className="cityDetails">
          <p>State: {element.State}</p>
          <p>Location: ({element.Lat},{element.Long})</p>
          <p>Population: {element.EstimatedPopulation}</p>
          <p>Total Wages: {element.TotalWages}</p>
          </div>
        </div>
        </center>)
      })}</p>

      
    </div>
  );
}

export default App;