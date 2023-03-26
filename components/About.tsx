import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((undefined, ref) => {
  return (
    <section ref={ref}>
      <h2>About Me</h2>
      <img
        className="w-40 my-4 self-center border rounded-full border-solid border-state-50"
        src="/profile.webp"
        alt="Petar Stanev profile photo"
      />
      <p className="bg-slate-50">
        Hi, I am Petar Stanev Software developer with more than
        <b> 6 years</b> of professional experience. Focused on web development
        working as a full-stack developer using <b>Go</b>, <b>C#</b> for backend
        and <b>React</b>,<b>Angular</b> and <b>Typescript</b> for frontend. Also
        have experience in cloud technologies like <b>AWS</b>.
      </p>
    </section>
  );
});

export default About;
