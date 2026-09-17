export type Person = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  longBio: string;
  initials: string;
  /** Optional portrait. Drop a file in `public/portraits/` and set this path. */
  photo?: string;
  photoPosition?: string;
  frame: "slab" | "prism" | "lens";
  skills: string[];
  learning?: string[];
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
    email?: string;
  };
};

export type ProjectStatus = "shipped" | "building";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Design" | "Development" | "Research" | "Product";
  status: ProjectStatus;
  contributorIds: string[];
  technologies: string[];
  sourceUrl?: string;
  liveUrl?: string;
};
