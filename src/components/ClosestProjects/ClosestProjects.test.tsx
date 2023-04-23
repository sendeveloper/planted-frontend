import React from "react";
import { render, screen } from "@testing-library/react";
import ClosestProjects from "./ClosestProjects";
import { PlantationProject, PlantationProjectWithDistance } from "types/types";

const mockProjects: PlantationProjectWithDistance[] = [
  {
    id: 1,
    projectName: "Project A",
    latitude: "50.659694",
    longitude: "7.043222",
    distance: 50,
  },
  {
    id: 2,
    projectName: "Project B",
    latitude: "50.659694",
    longitude: "7.043222",
    distance: 48.333333333333
  },
];

describe("ClosestProjects", () => {
  test("renders project names and distances correctly", () => {
    render(<ClosestProjects projects={mockProjects} />);
    const project1 = screen.getByTestId('project-1');
    expect(project1).toHaveTextContent('Project A');
    expect(project1).toHaveTextContent('50.00 km');

    const project2 = screen.getByTestId('project-2');
    expect(project2).toHaveTextContent('Project B');
    expect(project2).toHaveTextContent('48.33 km');
  });
  test('does not render when projects array is empty', () => {
    render(<ClosestProjects projects={[]} />);
    expect(screen.queryByText('Closest Plantation Projects:')).not.toBeInTheDocument();
  });
});