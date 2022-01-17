import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css'



function App() {
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
  const [city, setCity] = useState([])
const [input, setInput]=useState("")
  let url = `http://ctp-zip-api.herokuapp.com/city/`+input
  // call API


  const getData = async () => {
    await axios.get(url)
      .then(res => {
        setCity(res.data)
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
      <h1>City Search</h1>
      <div className="container">
      <label for="cityInput">Enter a city:</label><br/>
      <input className="cityName" onChange={handleChange}></input>
      
      </div>
      <h2>ZIPCODES:</h2>
      <p>{city.map(element => {
        return(
         
        <div className="cityCodesContainer">
          
          <p className="cityCodes">{element}</p>
       
      </div>
        )
      })}</p>

      
    </div>
  );
}

export default App;