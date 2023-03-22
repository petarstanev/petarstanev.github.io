const Education = () => {
  return (
    <section className="flex flex-col px-4">
      <h2 className="text-center text-3xl">Education</h2>
      <article className="border px-4 my-4 rounded-md border-violet-500 bg-slate-50">
        <h3 className="text-xl text-center my-2">
          Software Engineering with Professional Experience at{" "}
          <a
            href="https://www.salford.ac.uk/courses/undergraduate/software-engineering-professional-experience"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Salford
          </a>
        </h3>
        <p>Bachelor of Science</p>
        <p>First Class Honours</p>
        <p>September 2014 - June 2018</p>
        <p>Manchester, United Kingdom</p>
      </article>
    </section>
  );
};

export default Education;
