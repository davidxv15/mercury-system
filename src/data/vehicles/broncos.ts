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
    },

    transmission: {
      value: "Manuel or automatic depending on package.",
      definition: "Gear system.",
      analogy: "Bike gears for the engine.",
      buyerValue: "Manual for engagement, automatic for ease."
    },

    keyFeatures: [
      "4x4",
      "G.O.A.T. Modes",
      "Removable doors/top"
    ]
  },

  {
    id: "2026-bronco-big-bend",
    year: 2026,
    make: "Ford",
    model: "Bronco",
    trim: "Big Bend",
    bodyStyle: "SUV",
    bestFor: "Most people: daily driving plus adventure looks.",

    engine: {
      value: "2.3 Ecoboost I-4",
      definition: "Turbocharged four-cylinder engine.",
      analogy: "Efficient trail runner.",
      buyerValue: "Balanced power and cost."
    },

    horsepower: {
      value: 300,
      definition: "Engine output.",
      analogy: "How fast the athlete can sprint.",
      buyerValue: "Strong everyday performance."
    },

    torque: {
      value: "TBD",
      definition: "Twisting force.",
      analogy: "Low-speed muscle.",
      buyerValue: "Useful for trails and takeoff feel."
    },

    drivetrain: {
      value: "",
      definition: ""
    }

  }
];