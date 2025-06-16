export interface Project {
  id: string;
  title: string;
  category: 'Hospitals' | 'Apartments' | 'Commercial' |  'Auditorium' | 'Educational' | 'Office' |'Showroom';
  description: string;
  shortDescription: string;
  location: string;
  year: number;
  client: string;
  area: string;
  imageUrl: string;
  galleryImages: string[];
  specifications: Array<{ label: string; value: string }>;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}