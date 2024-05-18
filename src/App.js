// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navx from './components/Navx';
import Textareax from './components/Textareax';
import Alertx from './components/Alertx';
import Alertxi from './components/Alertxi';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

// let a = "ready";
function App() {
  const [mode, setMode] = useState("black")
  const [alertMsg, setAlert] = useState(null)
  // const [modeColor, setModeColor] = useState("#03050f")
  const [alertMsg1, setAlert1] = useState(null)

  // const colorx = () => {
  //   if (modeColor === "#03050f") {
  //     setModeColor('white')
  //     document.body.style.backgroundColor = "#C9EB00";
  //     document.body.style.color = "black";
  //     alertm1("Greenish yellow mood enabled" ,"Success")
  //   }
  //   else {
  //     setModeColor('#03050f')
  //     document.body.style.backgroundColor = "#03050f";
  //     document.body.style.color = "white";
  //     // document.body.style.backgroundColor = "red";
  //     alertm1("Dark mood enabled" ,"Success")
  //   }
  // }

  const alertm1 = (messege, type) => {
    setAlert({
      messege: messege,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const alertm2 = (messege) => {
    setAlert1({
      messege: messege,
    })

    setTimeout(() => {
      setAlert1(null)
    }, 1000);
  }

  const modex1 = () => {
    if (mode === "black") {
      setMode('white')
      document.body.style.backgroundColor = "white";
      alertm1("Light mood enabled", "Success")
    }
    else {
      setMode('black')
      document.body.style.backgroundColor = "#03050f";
      // document.body.style.backgroundColor = "red  ";
      alertm1("Dark mood enabled", "Success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navx title='TextLabCo' mode={mode} toggle={modex1} />
        <Alertxi alertMsg1={alertMsg1} />
        <Alertx alertMsg={alertMsg} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={ */}
            <Textareax
              textanalyze='Your message'
              mode={mode}
              alertm1={alertm1}
              setAlert={setAlert}
              alertm2={alertm2}
              setAlert1={setAlert1}
            />
      {/* //     } /> */}
      {/* //   </Routes> */}
      {/* // </Router> */}
    </>
  );
}

export default App;
