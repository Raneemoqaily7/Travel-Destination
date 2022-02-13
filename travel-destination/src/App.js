// import logo from './logo.svg';

import './App.css';
import Header from './components/header/Header.js'
import data from './data/db.json'
import Tours from './components/tours/Tours.js' 
import Footer from './components/footer/Footer.js'

function App() {
  return (
     <>
    <Header color ="DodgerBlue"/>

    <Tours data={data}/>
    <Footer/>

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

