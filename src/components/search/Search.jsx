import { useEffect, useState } from "react"
import "./search.css"

const Search = (props) => {

  const [searchValue, setSearchValue] = useState('')

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  useEffect(() => {
    props.SearchValue(searchValue)
  }, [searchValue])

  return (
    <div className="search-div">
      <input type="text" value={searchValue} onChange={handleSearchValue} placeholder="Search Country"/>
    </div>
  )
}

export default Search
