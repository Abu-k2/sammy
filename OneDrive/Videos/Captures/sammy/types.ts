export enum ProjectCategory {
  ALL = "All",
  RESIDENTIAL = "Residential",
  COMMERCIAL = "Commercial",
  RENOVATING = "Renovating",
}

export interface Project {
  name: string;
  location: string;
  year: string;
  workDone: string;
  category: ProjectCategory;
  imageUrl: string;
}