import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UniversityCard from './components/UniversityCard';
import './App.css';

const App = () => {
  const [universities, setUniversities] = React.useState([]);
  const [provinces, setProvinces] = React.useState([]);

  const fetchUniversities = async (country, province) => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      let filteredUniversities = response.data;
      if (province) {
        filteredUniversities = filteredUniversities.filter(
          (uni) => uni['state-province'] === province
        );
      }
      setUniversities(filteredUniversities);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  const fetchProvinces = async (country) => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      const uniqueProvinces = [...new Set(response.data.map((uni) => uni['state-province']))].filter(Boolean);
      setProvinces(uniqueProvinces);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={fetchUniversities} onCountryChange={fetchProvinces} provinces={provinces} />
      <div className="university-cards">
        {universities.map((university) => (
          <UniversityCard key={university.name} university={university} />
        ))}
      </div>
    </div>
  );
};

export default App;
//hii
