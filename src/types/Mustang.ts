export type SpecInfo = {
  value: string | number;
  definition: string;
  analogy: string;
  buyerValue: string;
};

export type Mustang = {
  id: string;
  year: number;
  trim: string;
  bodyStyle: "Fastback" | "Convertible";
}