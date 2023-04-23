
import React, { useState, useEffect } from "react";
import customerLocations from "data/customerLocations.json";
import { CustomerLocation } from "types/types";
import styles from "./styles.module.css";

interface LocationSearchProps {
  onLocationSelect: (location: CustomerLocation) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onLocationSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<CustomerLocation[]>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const searchResults = customerLocations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(searchResults);
    } else {
      setFilteredLocations([]);
    }
  }, [searchTerm]);

  const handleLocationSelect = (location: CustomerLocation) => {
    onLocationSelect(location);
    setSearchTerm(location.name);
    setFilteredLocations([]);
  };

  return (
    <div
      className={styles["location-search"]}
    >
      <input
        type="text"
        value={searchTerm}
        placeholder="Search location"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredLocations.length > 0 && (
        <ul>
          {filteredLocations.map(location => (
            <li key={location.name} onClick={() => handleLocationSelect(location)}>
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;