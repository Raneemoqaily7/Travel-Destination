
function Tours (props){
    return(
/// {
    // "id": "rec6d6T3q5EBIdCfD",
    // "name": "Paris",
    // "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    // "image": "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    // "price": "1,995"
    // }
<>
{props.data.map(value =>{
    return(
<div> 
{/* <p> Id of the city :{value.id} </p> */}
<h4>Name of the city :{value.name} </h4>
{/* <p> Description About the city:{value.info} </p>
<p> The average price of the trip : {value.price}</p> */}
<img src={value.image} alt={value.name}/>
</div>

  )
})}
</>




    );
}
export default Tours ;