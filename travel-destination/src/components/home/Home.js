

import Header from  '../header/Header.js'
import data from '../../data/db.json'
import Tours from '../tours/Tours.js' 
import Footer from '../footer/Footer.js'



function Home(){
    return(
        <>
        <Header color ="DodgerBlue"/>

       <Tours data={data}/>
       <div>
       <Footer/>
       </div>
        </>
    )
}
export default Home;

