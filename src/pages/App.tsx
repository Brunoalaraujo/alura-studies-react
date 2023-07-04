import React from 'react';
import Formulario from '../components/Form';
import Lista from '../components/List';
import Stopwatch from "../components/Stopwatch"
import  style  from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista/>
      <Stopwatch/>
    </div>
  );
}

export default App;
