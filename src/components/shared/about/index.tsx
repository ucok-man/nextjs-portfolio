import Highlight from "@/components/shared/highlight";

export default function AboutMe() {
  return (
    <section className="pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl">About Me</h2>
      <div className="flex-col flex-wrap items-center justify-center gap-4 text-center text-stone-300/80 tracking-wider leading-loose lg:leading-10 ">
        <p className="pb-6">
          As a Software Developer with{" "}
          <Highlight>100 years of professional experience</Highlight>, I
          specialize in building robust, scalable, and user-friendly web
          applications. My expertise spans across frontend and backend
          development, leveraging modern technologies. On the frontend, I{" "}
          <Highlight>create intuitive interfaces </Highlight> using TypeScript,
          React, Next.js, and other intuitive libraries. On the backend, I
          architect <Highlight>RESTful APIs and Microservices</Highlight>,
          ensuring efficient data handling and secure integrations.
        </p>

        <p>
          I am passionate about writing clean, maintainable code, optimizing
          performance, and collaborating with cross-functional teams to deliver
          impactful solutions. Whether I&apos;m implementing complex features,
          enhancing existing systems, or mentoring junior developers,{" "}
          <Highlight>
            I thrive on tackling challenges that drive innovation
          </Highlight>
          .
        </p>
      </div>
    </section>
  );
}
