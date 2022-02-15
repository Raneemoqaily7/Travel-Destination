
import Header from '../header/Header.js'
import data from '../../data/db.json'
import Tours from '../tours/Tours.js' 
import Footer from '../footer/Footer.js'
import {Routes,Route} from 'react-router-dom'


function Home(){
    return(
        <>
        <Header color ="DodgerBlue"/>

       <Tours data={data}/>
<       Footer/>
</Tour>

        </>
    )
}
export default Home;