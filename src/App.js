import React from 'react';
import Alltrain from './Component/Alltrain';
import Singletrain from './Component/SingleTrain';
import Reg from './Component/Reg';
import './App.css';

function App() {
  return (
     <React.Fragment>
       <Alltrain/>
       <Singletrain/>
       <Reg/>
    </React.Fragment>
  );
}
 
export default App;
