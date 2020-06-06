import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Layout from './Component/LayOut/Layout'

function App() {
  return (
    <div className="App">
<BrowserRouter>

<Layout/> 

</BrowserRouter>
     
    </div>
  );
}

export default App;
