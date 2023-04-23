import React, {useState} from "react";
import "./App.css";
import { CustomerLocation, PlantationProject, PlantationProjectWithDistance } from "types/types";
import LocationSearch from "components/LocationSearch/LocationSearch";
import ClosestProjects from "components/ClosestProjects/ClosestProjects";
import plantationProjects from "data/plantationProjects.json";
import { getClosestProjects } from "utils/utils";

const App: React.FC = () => {
  const [customerLocation, setCustomerLocation] = useState<CustomerLocation>();
  const [closestProjects, setClosestProjects] = useState<PlantationProjectWithDistance[]>([]);

  const onLocationSelect = (location: CustomerLocation) => {
    setCustomerLocation(location)
    setClosestProjects(getClosestProjects(location, plantationProjects, 3))
  }
  
  
  return (
  <div className="App">
  <h1>Closest Plantation Projects</h1>
    <LocationSearch
      onLocationSelect={onLocationSelect}
    />
    <ClosestProjects projects={closestProjects} />
  </div>
  );
};

export default App;