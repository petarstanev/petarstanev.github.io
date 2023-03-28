import { forwardRef } from "react";

const Resume = forwardRef<HTMLDivElement>((undefined, ref) => {
  return (
    <section ref={ref}>
      <h2>Resume</h2>
      <iframe
        src="https://docs.google.com/gview?url=https://petarstanev.com/Resume_Petar_Stanev.pdf&embedded=true"
        width={"100%"}
        height={"480"}
        className="border my-4 rounded-md border-violet-500 bg-slate-50"
      />
    </section>
  );
});
Resume.displayName = 'Resume';
export default Resume;
