import { content } from "./content";
let currentIndex = 0;
let nextGP = "";
export const getCurrentGP = () => {
  Object.values(content.grandPrix).forEach((gp, index) => {
    const currentDate = new Date().toISOString().split("T")[0];

    if (currentDate > new Date(gp.date).toISOString().split("T")[0]) {
      currentIndex = index + 1;
    }

    if (currentDate <= new Date(gp.date).toISOString().split("T")[0]) {
      nextGP = content.grandPrix[currentIndex];
    }
  });

  return nextGP;
};
