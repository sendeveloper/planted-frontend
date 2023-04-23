import { calculateDistance, getClosestProjects } from "./utils";
import { PlantationProject } from "types/types";

describe("calculateDistance", () => {
    test("returns the correct distance between two coordinates", () => {
        const latEiffelTower = 48.8584;
        const lonEiffelTower = 2.2945;
        const latStatueOfLiberty = 40.6892;
        const lonStatueOfLiberty = -74.0445;

        const distance = calculateDistance(latEiffelTower, lonEiffelTower, latStatueOfLiberty, lonStatueOfLiberty);
        const roundedDistance = Math.round(distance * 100) / 100; // Round to two decimal places

        expect(roundedDistance).toBe(5837.42);
    });
})

describe('getClosestProjects', () => {
    const customerLocation = {
      name: "Potsdam",
      latitude: 52.39384,
      longitude: 13.07368
    };
  
    const plantationProjects = [
      // ... Your sample plantation projects ...
      {
        "id": 1,
        "projectName": "Bäume pflanzen im Kottenforst",
        "latitude": "50.659694",
        "longitude": "7.043222",
      },
      {
        "id": 2,
        "projectName": "Bäume pflanzen im Kottenforst",
        "latitude": "50.659694",
        "longitude": "7.043222",
      },
      {
        "id": 3,
        "projectName": "Bäume pflanzen im Kottenforst",
        "latitude": "50.659694",
        "longitude": "7.043222",
      },
      {
        "id": 4,
        "projectName": "Bäume pflanzen im Kottenforst",
        "latitude": "50.671306",
        "longitude": "7.049528",
      },
      {
        "id": 5,
        "projectName": "Bäume pflanzen im Kottenforst",
        "latitude": "50.671306",
        "longitude": "7.049528",
      },
    ];
  
    test('returns correct closest projects and sorted by distance', () => {
        const closestProjects = getClosestProjects(customerLocation, plantationProjects, 3);
  
        expect(closestProjects.length).toBe(3);
        closestProjects.forEach((project, index) => {
            if (index < closestProjects.length - 1) {
              expect(project.distance).toBeLessThanOrEqual(closestProjects[index + 1].distance);
            }
        });
    });
    test('returns all projects if numProjects is greater than the total projects', () => {
        const closestProjects = getClosestProjects(customerLocation, plantationProjects, 10);
    
        expect(closestProjects.length).toBe(plantationProjects.length);
    });
    
    test('returns empty array if there are no projects', () => {
        const closestProjects = getClosestProjects(customerLocation, [], 3);
    
        expect(closestProjects.length).toBe(0);
    });
    test('returns top 3 projects randomly chosen from the given data', () => {
        const randomProjectIds = [1, 3, 4, 2, 5];
        
        const randomProjects: PlantationProject[] = randomProjectIds
            .map(id => plantationProjects.find(project => project.id === id))
            .filter(project => project !== undefined) as PlantationProject[];

        const closestProjects = getClosestProjects(customerLocation, randomProjects, 3);
    
        expect(closestProjects.length).toBe(3);
        closestProjects.forEach((project, index) => {
            if (index < closestProjects.length - 1) {
              expect(project.distance).toBeLessThanOrEqual(closestProjects[index + 1].distance);
            }
        });
    });
});