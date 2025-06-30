export interface HandyWork {
  id: number;
  title: string;
  image: string;
}

export const handyWork: HandyWork[] = [
  {
    id: 1,
    title: "Landscaping",
    image:
      "https://static.homeguide.com/assets/images/content/homeguide-landscaping-with-edging-plants-outdoor-lighting.jpg",
  },
  {
    id: 2,
    title: "Construction",
    image:
      "https://d4c5gb8slvq7w.cloudfront.net/eyJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiaGVpZ2h0Ijo0MjB9fSwiYnVja2V0IjoiZmluZWhvbWVidWlsZGluZy5zMy50YXVudG9uY2xvdWQuY29tIiwia2V5IjoiYXBwXC91cGxvYWRzXC8yMDE4XC8wMlwvMjcyMDIyNTlcLzAyMTI3NDA2OERlY2tfSm9pc3RzLTcwMHg0MjAuanBnIn0=",
  },
  {
    id: 3,
    title: "Paint",
    image:
      "https://handymanconnection.com/wp-content/uploads/2023/03/interior-painting.png",
  },
  {
    id: 4,
    title: "Trim",
    image:
      "https://sustainmycrafthabit.com/wp-content/uploads/2022/06/How-to-Trim-a-Window-5312.jpg.webp",
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
