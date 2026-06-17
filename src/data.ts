export interface Service {
  id: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    id: 'framing',
    title: 'Light Gauge Metal Framing',
    desc: "Whether it's a tenant improvement or a full office layout, our light-gauge metal framing ensures precision and efficiency."
  },
  {
    id: 'drywall',
    title: 'Drywall Systems',
    desc: 'We install drywall systems that deliver seamless, smooth surfaces, ready for paint and finish.'
  },
  {
    id: 'taping',
    title: 'Taping & Finishing',
    desc: 'Seamless taping and finishing for flawless walls and ceilings.'
  },
  {
    id: 'painting',
    title: 'Painting',
    desc: 'Lacquers, stains, and high-performance coatings — impeccable custom finishes for high-end spaces.'
  },
  {
    id: 'act',
    title: 'Acoustical Ceiling Tiles (ACT)',
    desc: 'ACT systems that enhance both the look and the acoustic performance of a space.'
  }
];

export interface ProjectReference {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  scope: string[];
}

// Phase 2 - Projects / References will be loaded here. Kept empty in Phase 1 as instructed.
export const REF_PROJECTS: ProjectReference[] = [];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

// Phase 3 - Our Team will be loaded here. Kept empty in Phase 1 as instructed.
export const TEAM_MEMBERS: TeamMember[] = [];
