import ExperienceModel from "../models/Experience";

const Experience = (props: ExperienceModel) => {
  return (
    <article>
      <h3>
        {props.position} at{" "}
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.name}
        </a>
      </h3>
      {props.description.map((description, id) => (
        <p key={id}>{description}</p>
      ))}
    </article>
  );
};
export default Experience;
