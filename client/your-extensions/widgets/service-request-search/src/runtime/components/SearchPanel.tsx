
import React, { useState } from 'react';

const SearchPanel = () => {
  const [zipCode, setZipCode] = useState('');

  const handleSearch = () => {
    console.log('Search clicked. ZIP Code:', zipCode);
  };

  const handleReset = () => {
    setZipCode('');
    console.log('Reset clicked');
  };

  return (
    <div>
      <h3>311 Service Request Search</h3>

      <label htmlFor="zipCode">ZIP Code</label>

      <select
        id="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      >
        <option value="">-- Select ZIP Code --</option>
        <option value="38103">38103</option>
        <option value="38104">38104</option>
        <option value="38111">38111</option>
        <option value="38117">38117</option>
      </select>

      <div>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default SearchPanel;
