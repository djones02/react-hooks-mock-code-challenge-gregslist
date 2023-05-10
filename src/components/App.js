import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  const [listings, setlistings] = useState([])
  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => {setlistings(data)})
  }, [])

  function deleteListing(id) {
    const newListings = listings.filter(currentLsiting => currentLsiting.id !== id)
    setlistings(newListings)
  }

  function updateSearch(newSearch) {
    setSearch(newSearch)
  }

  function toggleSort() {
    setSorted(prev => !prev)
  }

  function addListing(listing) {
    setlistings([...listings, listing])
  }

  const filteredListings = [...listings].filter(el => {
    return el.description.toLowerCase().includes(search.toLowerCase())
  })

  let sortListings = filteredListings
  if(sorted){
    sortListings = filteredListings.sort((a,b) => {
      return a.location.localeCompare(b.location)
    })
  }

  return (
    <div className="app">
      <Header updateSearch={updateSearch} />
      <div>
        <button onClick={toggleSort}>{sorted? 'Unsorted': 'Location: A-Z'}</button>
      </div>
      <ListingForm addListing={addListing} />
      <ListingsContainer listings={filteredListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
