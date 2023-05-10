import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setlistings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => {setlistings(data)})
  }, [])

  function deleteListing(id) {
    const newListings = listings.filter(currentLsiting => currentLsiting.id !== id)
    setlistings(newListings)
  }

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  const filteredListings = [...listings].filter(el => {
    return el.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header handleSearch={handleSearch} search={search}/>
      <ListingsContainer listings={filteredListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
