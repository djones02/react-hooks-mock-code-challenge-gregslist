import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {

  const listingMap = listings.map((listing) => {
    return <ListingCard 
    listing={listing}
    key={listing.id}
    deleteListing={deleteListing}
    />
  })

  return (
    <main>
      <ul className="cards">
        {listingMap}
      </ul>
    </main>
  );
}

export default ListingsContainer;
