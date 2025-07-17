export interface JobPost {
  _id: string;
  company: {
    _id: string;
    name: string;
    website?: string;
  };
  title: string;
  jobLocation?: string;
  salaryRange?: {
    aed?: {
      min?: number;
      max?: number;
    };
    usd?: {
      min?: number;
      max?: number;
    };
  };
  jobDescription: string;
  keyResponsibilities: string[];
  requiredSkillsAndQualifications: string[];
  benefits?: string[];
  status: "Open" | "Closed";
  applicationDeadline: string;
  createdAt: string;
  updatedAt: string;
}
