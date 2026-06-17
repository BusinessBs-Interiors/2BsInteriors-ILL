export interface Service {
  id: string;
  title: string;
  desc: string;
}

export interface ProjectReference {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  scope: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}
