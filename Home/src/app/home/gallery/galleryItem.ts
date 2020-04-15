export interface GalleryItem {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  image: string;
  client?: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  technologies?: string;
  notes?: string[];
}

