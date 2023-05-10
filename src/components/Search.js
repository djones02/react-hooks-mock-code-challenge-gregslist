import React,{useState} from "react";

function Search({updateSearch}) {
  const [form, setForm] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(form)
  }

  function handleSearch(e) {
    setForm(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
