import { CustomerLocation, PlantationProject, PlantationProjectWithDistance } from 'types/types'
export const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};
  
const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

export function getClosestProjects(
  customerLocation: CustomerLocation,
  plantationProjects: PlantationProject[],
  numProjects: number
): PlantationProjectWithDistance[] {
  const projectsWithDistance = plantationProjects.map((project) => {
    const projectLocation = {
      latitude: parseFloat(project.latitude),
      longitude: parseFloat(project.longitude)
    };

    const distance = calculateDistance(customerLocation.latitude, customerLocation.longitude, projectLocation.latitude, projectLocation.longitude);

    return {
      ...project,
      distance // add distance property
    };
  });

  const sortedProjects = projectsWithDistance.sort(
    (a, b) => a.distance - b.distance
  );

  return sortedProjects.slice(0, numProjects);
}