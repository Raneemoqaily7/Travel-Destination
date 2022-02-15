import React ,{useState} from 'react'
import { useParams } from 'react-router-dom'

import data from '../../data/db.json'
function TourDetails(){
    const {id}=useParams();
    const {name,info,image,price}=data.find(val=>val.id ===id);
    const[detail ,setDetail]=useState(false);

    return 
    

}
