import { forwardRef } from "react";
import Experience from "./shared/Experience";

const Education = forwardRef<HTMLDivElement>((undefined, ref) => {
  let uni = {
    id: 1,
    position: "Software Engineering with Professional Experience",
    link: "https://www.salford.ac.uk/courses/undergraduate/software-engineering-professional-experience",
    name: "University of Salford",
    description: [
      "Bachelor of Science",
      "First Class Honours",
      "September 2014 - June 2018",
      "Manchester, United Kingdom",
    ],
  };

  return (
    <section ref={ref}>
      <h2>Education</h2>
      <Experience {...uni} />
    </section>
  );
});

export default Education;
