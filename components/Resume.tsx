const Resume = () => {
  return (
    <section className="flex flex-col px-4 ">
      <h2 className="text-center text-3xl">Resume</h2>
      <article className="border my-4 rounded-md border-violet-500 bg-slate-50">
        <iframe
          src="https://docs.google.com/gview?url=https://petarstanev.com/Resume%20Petar%20Stanev.pdf&embedded=true"
          width={"100%"}
          height={"480"}
          className="rounded-md"
        />
      </article>
    </section>
  );
};

export default Resume;
