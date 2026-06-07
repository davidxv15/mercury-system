import { SpecInfo } from "./SpecInfo";

export type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  bodyStyle: string;

  price?: number;
  image?: string;
  category: "vehicle";

  engine: SpecInfo;
  liters?: SpecInfo;
  cylinders?: SpecInfo;
  horsepower?: SpecInfo;
  torque?: SpecInfo;
  transmission?: SpecInfo;
  drivetrain?: SpecInfo;
  
  keyFeatures: string[];
  bestFor: string;
}