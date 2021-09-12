import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
      <form className='formSearching' onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
      }}>
        <div className='divSearching'>
          <input
            type="text"
            className="inputSearch"
            placeholder="City..."
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <input className="botonSearch" type="submit" value="Search" />
        </div>
      </form>
  );
}