import "./country.css"


const Country = (props) => {

  const handleClicked = (name) => {
    props.onRemove(name)
  }


    const {name,capital,flags,population,area} = props.country

  return (
    <div className="card">
      <img className="img" src={flags.png} alt="" />
      <h1 className="common">Name: {name.common}</h1>
      <h2 className="common">Population: {population}</h2>
      <h2 className="common">Capital: {capital}</h2>
      <h2 className="common">Area: {area}</h2>
      <button className="btn" onClick={() => {
        handleClicked(name.common)
      }}>Remove</button>
    </div>
  )
}

export default Country
