export interface HandyWork {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export const handyWork: HandyWork[] = [
  {
    id: 1,
    title: "New Construction And Remodels",
    image: "/raine-company/baker_building.JPG",
    alt: "concrete building with updated exterior paint, and new trusses",
  },
  {
    id: 2,
    title: "Pressure Washing",
    image: "/raine-company/employee_pressure_washing.JPG",
    alt: "pressure washing services",
  },
  {
    id: 3,
    title: "Decks and Coverings",
    image: "/raine-company/porch_cover.JPG",
    alt: "wooden deck with overhang covering",
  },
  {
    id: 4,
    title: "Lean-To's and Hardened Cover Structures",
    image: "/raine-company/red_overhang.JPG",
    alt: " a lean-to with red painted tin roof covering and solid timber framework",
  },
  {
    id: 5,
    title: "Excavation",
    image: "/raine-company/excavator.JPG",
    alt: "an excavator with the Rain Company Logo",
  },
] as const;

export interface Service {
  id: number;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Landscaping",
    description: "Everything from mulching and gravel to grading and digging.",
  },
  {
    id: 2,
    title: "Construction",
    description:
      "Need a lean-to or possibly a new deck? We've got you covered.",
  },
  {
    id: 3,
    title: "Paint",
    description: "Interior and exterior, we can do it all.",
  },
  {
    id: 4,
    title: "Trim",
    description:
      "We can help you redefine your spaces with beautiful, charming trim work.",
  },
];
