import React from "react";
import "./App.css";
import { CustomerLocation } from "types/types";
import LocationSearch from "components/LocationSearch/LocationSearch";

const App: React.FC = () => {
  const onLocationSelect = (location: CustomerLocation) => {
    console.log(location)
  }
  return (
  <div className="App">
  <h1>Closest Plantation Projects</h1>
    <LocationSearch
      onLocationSelect={onLocationSelect}
      />
  </div>
  );
};

export default App;