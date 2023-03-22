
const About = () => {
  return (
    <section className="flex flex-col px-4 items-center">
      <h2 className="text-center text-3xl pb-4">About Me</h2>
      <img
        className="w-40 border rounded-full border-solid border-[#eceff4]"
        src="/profile.webp"
        alt="Petar Stanev profile photo"
      />
      <p className="bg-slate-50 pt-4">
        Hi, I am Petar Stanev Software developer with more than
        <b> 6 years</b> of professional experience. Focused on web development
        working as a full-stack developer using <b>Go</b>, <b>C#</b> for backend
        and <b>React</b>,<b>Angular</b> and <b>Typescript</b> for frontend. Also
        have experience in cloud technologies like <b>AWS</b>.
      </p>
    </section>
  );
};

export default About;
