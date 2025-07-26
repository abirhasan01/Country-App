import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
import Search from './components/search/Search'

const url = "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,area"

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])
  const [filteredCountries, setfilteredCountries] = useState(countries)

  const fetchingData = async (url) => {

    setIsLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setfilteredCountries(data)
      setIsLoading(false)
      setError(null)
    }catch(error){
      setIsLoading(false)
      setError(error)
    }

  }

  useEffect(() => {
    fetchingData(url)
  }, [])

  const handleRemove = (name) => {
    const filter = filteredCountries.filter((country) => country.name.common !== name)
    setfilteredCountries(filter)
  }
  const handleSearchValue = (search) => {
    let value = search.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    })
    setfilteredCountries(newCountries)
  }

  return (
    <>
      <h1 className='heading-text'>Countries App</h1>
      {<Search SearchValue={handleSearchValue} />}
      {isLoading && <h2 className='center'>Data is loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemove={handleRemove} />}
    </>
  )
}

export default App
