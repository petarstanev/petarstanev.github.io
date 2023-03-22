const Work = () => {
  return (
    <section className="flex flex-col px-4">
      <h2 className="text-center text-3xl">Work Experience</h2>
      <article className="border px-4 my-4 rounded-md border-violet-500 bg-slate-50">
        <h3 className="text-xl text-center my-2">
          Software Developer at{" "}
          <a
            href="https://www.bet365.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bet 365
          </a>
        </h3>
        <p>
          Full Stack Development - Sports website, Members website
        </p>
        <p>
          Typescript, GO, Javascript, SASS, Jenkins
        </p>
        <p>
          Manchester, United Kingdom
        </p>
        <p>
          April 2019 - August 2022(Full time)
        </p>
      </article>
      <article className="border px-4 mb-4 rounded-md border-violet-500 bg-slate-50">
        <h3 className="text-xl text-center my-2">
          Software Developer at{" "}
          <a
            href="https://www.topcashback.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            TopCashback
          </a>
        </h3>
        <p>
          Full Stack Development - TopCashback (UK,US,India) website, While
          label websites
        </p>
        <p>
          ASP.NET, C#, VB.NET, Angular, jQuery, SQL, NoSQL
        </p>
        <p>
          Manchester, United Kingdom
        </p>
        <p>
          June 2016 - April 2019 (Full time)
        </p>
      </article>
      <article className="border px-4 mb-4 rounded-md border-violet-500 bg-slate-50">
        <h3 className="text-xl text-center my-2">
          Software Developer Intern at{" "}
          <a
            href="https://devrix.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevriX
          </a>
        </h3>
        <p>
          Wordpress plugins and themes development
        </p>
        <p>
          PHP, jQuery, HTML/CSS, SQL
        </p>
        <p>Sofia, Bulgaria</p>
        <p>
          June 2013 - September 2013 (Internship)
        </p>
      </article>
    </section>
  );
};

export default Work;
