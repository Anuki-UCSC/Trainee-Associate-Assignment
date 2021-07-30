
import { useEffect ,useState} from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import LoginPage2 from "./components/LoginPage2";
import HomePage from './components/HomePage';

function App() {

  

    const isLogin =sessionStorage.getItem("isLoggin");

 
  return (
    <div className="App">

      <BrowserRouter>      
      {
        isLogin !== null ? (<Route  path="/home"><HomePage/></Route> ):
         ( <Route exact path="/"><LoginPage2/></Route>)
      }
      </BrowserRouter>

     
    </div>
  );
}

export default App;



