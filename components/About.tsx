import { forwardRef } from "react";
import Image from 'next/image'

const About = forwardRef<HTMLDivElement>((undefined, ref) => {
  const yearsExperience = new Date().getFullYear() - 2017;

  return (
    <section ref={ref}>
      <h2>About Me</h2>
      <Image
        height="160"
        width="160"
        className="my-4 self-center border rounded-full border-solid border-state-50"
        src="/profile.webp"
        alt="Petar Stanev profile photo"
      />
      <article>
        Hi, I am Petar Stanev Software developer with more than
        <b> {yearsExperience} years</b> of professional experience. Focused on web development
        working as a full-stack developer using <b>Go</b>, <b>C#</b> for backend
        and <b>React</b>, <b>Angular</b> and <b>Typescript</b> for frontend. Also
        have experience in cloud technologies like <b>AWS</b>.
      </article>
    </section>
  );
});

About.displayName = 'About';

export default About;
