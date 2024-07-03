import React from 'react';

const SearchBar = ({ onSearch, onCountryChange, provinces }) => {
   const [country, setCountry] = React.useState('');
   const [province, setProvince] = React.useState('');

   const handleSearch = () => {
      onSearch(country, province);
   };

   const handleCountryChange = (e) => {
      setCountry(e.target.value);
      onCountryChange(e.target.value);
   };

   return (
      <div>
         <input
            type="text"
            value={country}
            onChange={handleCountryChange}
            placeholder="Enter country"
         />
         <select onChange={(e) => setProvince(e.target.value)}>
            <option value="">Select State/Province</option>
            {provinces.map((prov) => (
               <option key={prov} value={prov}>{prov}</option>
            ))}
         </select>
         <button onClick={handleSearch}>Search</button>
      </div>
   );
};

export default SearchBar;
