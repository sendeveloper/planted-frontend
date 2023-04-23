import React from "react";
import { PlantationProjectWithDistance } from "types/types";

interface ClosestProjectsProps {
  projects: PlantationProjectWithDistance[];
}

const ClosestProjects: React.FC<ClosestProjectsProps> = ({ projects }) => {
  return (
    <>
      {projects.length > 0 && (
        <div>
          <h2>Closest Plantation Projects:</h2>
          <ul>
            {projects.map(({id, projectName, distance}) => (
              <li key={id} data-testid={`project-${id}`}>
                <span>{projectName}</span>
                <span>{distance.toFixed(2)} km</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ClosestProjects;