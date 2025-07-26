import { v4 as uuidv4 } from 'uuid';
import Country from '../country/Country';
import "./Countries.css";

const Countries = (props) => {
  return (
    <div className='container'>
      {props.countries.map((country) => {
        const newCountry = {country, id: uuidv4()}
        return <Country {...newCountry} key={newCountry.id} onRemove={props.onRemove} />
      })}
    </div>
  )
}

export default Countries
