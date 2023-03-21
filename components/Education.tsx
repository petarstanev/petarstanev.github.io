
const Education = () => {
  return (
    <section className="flex flex-col px-[1em] py-0">
        <h2 className="text-center text-[1.9em]">Education</h2>
        <article className="mt-[0.5em] p-2.5 rounded-[20px] border-solid border-[#e6e6e6]">
          <h3 className="text-[1.4em] text-center mx-0 my-[0.5em]">
            Software Engineering with Professional Experience at{" "}
            <a
              href="https://www.salford.ac.uk/courses/undergraduate/software-engineering-professional-experience"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Salford
            </a>
          </h3>
          <p className="text-center mx-0 my-[0.3em]">Bachelor of Science</p>
          <p className="text-center mx-0 my-[0.3em]">First Class Honours</p>
          <p className="text-center mx-0 my-[0.3em]">
            September 2014 - June 2018
          </p>
          <p className="text-center mx-0 my-[0.3em]">
            Manchester, United Kingdom
          </p>
        </article>
      </section>
  );
};

export default Education;
