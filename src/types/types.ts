export interface CustomerLocation {
  name: string;
  latitude: number;
  longitude: number;
}

export interface PlantationProject {
  id: number;
  projectName: string;
  latitude: string;
  longitude: string;
}

export interface PlantationProjectWithDistance extends PlantationProject {
  distance: number;
}