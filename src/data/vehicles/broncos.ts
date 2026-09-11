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

    category: "vehicle",

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

    category: "vehicle",

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
      value: "4x4",
      definition: "Four-wheel-drive capability.",
      analogy: "More grip hands on the ground.",
      buyerValue: "Confidence off-road or in bad weather."
    },

    transmission: {
      value: "Manual or automatic",
      definition: "Controls gear changes.",
      analogy: "Choosing the right bike gear.",
      buyerValue: "Lets buyer choose involvement or convenience."
    },
    
    keyFeatures: ["4x4", "G.O.A.T. Modes", "Adventure-ready style"],
  },

  {
    id: "2026-bronco-outer-banks",
    year: 2026,
    make: "Ford",
    model: "Bronco",
    trim: "Outer Banks",
    bodyStyle: "SUV",
    bestFor: "Buyer who wants Bronco style with more comfort and polish.",

    engine: {
      value: "2.3 Ecoboost I-4 / available 2.7 Ecoboost V6",
      definition: "Standard turbo four-cylinder or available stronger V6.",
      analogy: "Regular athelete or bigger athelete.",
      buyerValue: "More comfort trim with optimal stronger power."
    },

    horsepower: {
      value: "300 / 330",
      definition: "Engine output depending engine.",
      analogy: "Two levels of sprint speed.",
      buyerValue: "Lets buyer pick value or extra punch."
    },

    torque: {
      value: "TBD",
      definition: "Rotational force.",
      analogy: "Seat shove.",
      buyerValue: "V6 vill feel stronger under throttle."
    },

    drivetrain: {
      value: "4x4",
      definition: "Power to all four wheels.",
      analogy: "All four feet pushing.",
      buyerValue: "Bronco capability wiht nicer trim."
    },

    transmission: {
      value: "Automatic-foucused",
      definition: "Gear system.",
      analogy: "Smooth automatic bike gears.",
      buyerValue: "Easy daily driving."
    },

    keyFeatures: ["Comfort-focused", "Style upgrades", "Available 2.7L V6"]
  },

  {
    id: "2026-bronco-badlands",
    year: 2026,
    make: "Ford",
    model: "Bronco",
    trim: "Badlands",
    bodyStyle: "SUV",
    bestFor: "Serious trail buyer who cares about capability.",

    category: "vehicle",

    engine: {
      value: "2.3L EcoBoost I-4 / available 2.7L EcoBoost V6",
      definition: "Trail-ready powertrain choices.",
      analogy: "Off-road hiking boot with engine options.",
      buyerValue: "More serious off-road setup."
    },

    horsepower: {
      value: ""
    }
  }

];