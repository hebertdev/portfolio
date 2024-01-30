export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github?: string | null; // Allow for null or string
  demo?: string | null;
  play?: string;
}
