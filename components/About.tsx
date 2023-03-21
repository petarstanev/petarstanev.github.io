
const About = () => {
  return (
    <section className="flex flex-col px-[1em] py-0 items-center">
      <h2 className="text-center text-[1.9em]">About Me</h2>
      <img
        className="w-[10em] border rounded-full border-solid border-[#eceff4]"
        src="/profile.webp"
        alt="Petar Stanev profile photo"
      />
      <p>
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
