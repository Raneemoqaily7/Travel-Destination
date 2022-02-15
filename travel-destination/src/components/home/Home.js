
import Header from '../header/Header.js'
import data from '../../data/db.json'
import Tours from '../tours/Tours.js' 
import Footer from '../footer/Footer.js'



function Home(){
    return(
        <>
        <Header color ="DodgerBlue"/>

       <Tours data={data}/>
       <Footer/>


        </>
    )
}
export default Home;