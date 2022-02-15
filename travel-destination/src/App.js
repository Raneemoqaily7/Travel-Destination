import './App.css';

import Home from "./components/home/Home.js"
import TourDetails from "./components/TourDetails/TourDetails.js"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
     <>

    <Routes>

  <Route path ='/' element={<Home/>}> </Route>
  <Route path ="/city/:id" element ={<TourDetails />}> </Route>
  
  </Routes>

 
    

</>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;

