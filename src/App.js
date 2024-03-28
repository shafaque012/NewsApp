
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
      <Routes>
          < Route exact path="/" element={<News key="general" page={10} country="in" category='general'/> }/>
          < Route exact path="/Business" element={<News key="Business" page={10} country="in" category='Business'/> }/>
          < Route exact path="/Entertainment" element={<News key="Entertainment" page={10} country="in" category='Entertainment'/> }/>
          < Route exact path="/general" element={<News key="general" page={5} country="in" category='general'/> }/>
          < Route exact path="/Health" element={<News key="Health" page={5} country="in" category='Health'/> }/>
          < Route exact path="/Science" element={<News key="Science" page={5} country="in" category='Science'/> }/>
          < Route exact path="/Sports" element={<News key="Sports" page={5} country="in" category='Sports'/> }/>
          < Route exact path="/Technology" element={<News key="Technology" page={5} country="in" category='Technology'/> }/>
      </Routes>
      </Router>
       </div>
    )
  }
}
//<Routes>
         // <Route  exact path="/about" element={ <About  />}/>

          //<Route exact path="/" element={<TextForm heading="TextUtils-Word Counter,Character Counter " mode={mode}/>}/>
          
          //</Routes>


