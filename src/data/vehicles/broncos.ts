import { Vehicle } from "../../types/Vehicle";

export const broncos: Vehicle[] = [
  {
    id: "2026-bronco-base",
    year: 2026,
    make: "Ford",
    model: "Bronco",
    trim: "Base",
    bodyStyle: "SUV",
    bestFor: "Entry Bronco buyer who wants the core off-road identity.",

    engine: {
      value: "2.3 Ecoboost I-4",
      definition: "Turbocharged four-cylinder engine.",
      analogy: "A compact athlete with a boost button.",
      buyerValue: "Good power, lighter feel, and better value.",
    },

    horsepower: {
      value: 300,
      definition: "How much work the engine can produce.",
      analogy: "Sprint speee.",
      buyerValue: "Plenty for daily driving and trail use."

    },

    torque: {
      value: "TBD",
      definition: "Rotational shove from the engine.",
      analogy: "The push into your seat.",
      buyerValue: "Helps with crawling, climbing, acceleration."
    },

    drivetrain: {
      value: "4x4",
      definition: "Power can go to all four wheels.",
      analogy: "All four limbs helping climb.",
      buyerValue: "Core Bronco capability."
    }


  }
];