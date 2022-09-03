import Axios from 'axios';
import React from 'react';


function App() {
  const getISSLocation = () => {
    Axios.get("https://api.wheretheiss.at/v1/satellites/25544").then((response) => {
      console.log(response);
      return(toString(response.data.latitude + response.data.longitude));
    })
  };
  return (
    <div className="App">
      <header className="App-header">  
        <div class="card" style={{width: 18+"rem"}}>
          <div class="card-body">
            <h5 class="card-title">Where is the ISS?</h5>
            <p class="card-text">Click below to find the ISS.</p>
            <p class="card-text">{getISSLocation()}</p>
            <button type='button' className="btn btn-primary" onClick={getISSLocation}>Find</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
