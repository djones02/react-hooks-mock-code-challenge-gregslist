import React,{useState} from "react";

function ListingCard({listing, deleteListing}) {
  const [favoriteButton, setFavoriteButton] = useState(true)

  function toggleButton() {
    setFavoriteButton(prev => !prev)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => {
      deleteListing(listing.id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favoriteButton ? (
          <button onClick={toggleButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
