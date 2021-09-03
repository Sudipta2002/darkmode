import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import Navbar from '../Navbar/Navbar';
import TextForm from '../TextForm/TextForm';

function App() {
  const [mode, setmode] = useState("light");
  // const [background, setbackground] = useState("#042743");
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert(" Light mode enabled","Success");
    }else{
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert(" Dark mode enabled","Success");
    }
  }
  return (
    <>
      <Navbar home="HOME" mode={mode} toggleMode={toggleMode} aboutText="ABOUT"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
      </div>
  
    </>
  );
}

export default App;
