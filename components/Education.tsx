import Experience from "./shared/Experience";

const Education = () => {
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
    <section>
      <h2>Education</h2>
      <Experience {...uni} />
    </section>
  );
};

export default Education;
