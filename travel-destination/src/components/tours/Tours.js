
import {Link} from 'react-router-dom'
import Tour from './tour/Tour'

function Tours (props){
    return(
<>

{props.data.map((value,idx) => {
    return(
        <div key={idx}>
        <Link to={`/city/${value.id}`}> <Tour tour={value}/> </Link>
         </div>
         )
    })}
        </>




   )
}
export default Tours ;

