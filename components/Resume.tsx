import { forwardRef } from "react";

const Resume = forwardRef<HTMLDivElement>((undefined, ref) => {
  return (
    <section ref={ref}>
      <h2>Resume</h2>
      {/* /resume.pdf#toolbar=0 to hide toolbar */}
      <iframe
        width="100%"
        height="480"
        allowFullScreen={true}
        src="/Resume_Petar_Stanev.pdf"
        className="border my-4 rounded-md border-violet-500 bg-slate-50"
      />
    </section>
  );
});
Resume.displayName = "Resume";
export default Resume;
