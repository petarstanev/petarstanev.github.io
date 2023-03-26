import Experience from "./shared/Experience";

const Work = () => {
  const jobs = [
    {
      id: 1,
      position: "Software Developer",
      link: "https://www.bet365.com",
      name: "Bet 365",
      description: [
        "Full Stack Development - Sports website, Members website",
        "Typescript, GO, Javascript, SASS, Jenkins",
        "Manchester, United Kingdom",
        "April 2019 - August 2022(Full time)",
      ],
    },
    {
      id: 2,
      position: "Software Developer",
      link: "https://www.topcashback.co.uk",
      name: "TopCashback",
      description: [
        "Full Stack Development - TopCashback (UK,US,India) website, While label websites",
        "ASP.NET, C#, VB.NET, Angular, jQuery, SQL, NoSQL",
        "Manchester, United Kingdom",
        "June 2016 - April 2019 (Full time)",
      ],
    },
    {
      id: 3,
      position: "Software Developer Intern",
      link: "https://devrix.com",
      name: "DevriX",
      description: [
        "Wordpress plugins and themes development",
        "PHP, jQuery, HTML/CSS, SQL",
        "Sofia, Bulgaria",
        "June 2013 - September 2013 (Internship)",
      ],
    },
  ];

  return (
    <section>
      <h2>Work Experience</h2>
      {jobs.map((job) => (
        <Experience key={job.id} {...job} />
      ))}
    </section>
  );
};

export default Work;
