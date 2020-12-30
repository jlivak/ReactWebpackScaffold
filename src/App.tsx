import React from 'react';
import './App.css';
import {hot} from "react-hot-loader/root";
import ThreeJsContainer from "./ThreeJsContainer";

const App = () => (
    <div className="App">
      <ThreeJsContainer/>
    </div>
);

export default hot(App);
