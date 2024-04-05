import { useState } from "react";
import "./Country.css";


const Country = ({ country,handleVisitedCountries,handleVisitedFlags }) => {
  const { name, flags,population,area,cca3 } = country;
  const [visited,setVisited]=useState(false);
  
  const handleVisited=()=>{
    setVisited(!visited);
  }
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color: visited? 'black' : 'white'}}>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>code:{cca3}</small></p>
      <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited? 'visited':'Going'}</button>
      {visited ? "I Have visited this country":"I Want to go"}
    </div>
  );
};

export default Country;
