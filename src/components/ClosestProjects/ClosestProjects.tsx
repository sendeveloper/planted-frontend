import React from "react";
import { CustomerLocation, PlantationProjectWithDistance } from "types/types";
import styles from "./styles.module.css";

interface ClosestProjectsProps {
  projects: PlantationProjectWithDistance[];
  location?: CustomerLocation
}

const ClosestProjects: React.FC<ClosestProjectsProps> = ({ projects, location }) => {
  return (
    <div className={styles["closest-projects"]}>
      {projects.length > 0 && (
        <>
          {
            location && <h2>{location.name}</h2>
          }
          <ul>
            {projects.map(({id, projectName, distance}) => (
              <li key={id} data-testid={`project-${id}`}>
                <span className="font-bold text-lg">{projectName}</span>
                <span>{distance.toFixed(2)} km</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ClosestProjects;