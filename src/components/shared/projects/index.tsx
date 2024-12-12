import { If, Iterate } from "@/components/utility";
import { PROJECTS } from "@/constant";
import Image from "next/image";
import Tag from "../tag";

export default function Projects() {
  return (
    <section className="pb-4 lg:mb-36">
      <h2 className="my-20 mb-36 text-center text-4xl text-stone-300">
        Projects I&apos;m proud of
      </h2>
      <div>
        <Iterate
          items={PROJECTS}
          render={(item, idx) => (
            <>
              <If condition={(idx + 1) % 2 === 0}>
                <div
                  key={idx}
                  className="mb-10 flex flex-wrap items-center lg:mb-10 lg:relative lg:justify-end lg:text-right"
                >
                  <div className="w-full lg:flex lg:items-center lg:absolute lg:-z-10 lg:border lg:border-stone-300/30 lg:w-1/4 lg:border-b-0 lg:border-l-0 lg:rounded-lg overflow-hidden lg:p-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={250}
                      height={250}
                      className="mb-6 lg:w-full rounded object-cover lg:mb-0 lg:max-h-[300px] lg:rounded-lg"
                    />
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4 lg:pl-8 lg:relative lg:right-96 md:right-20 lg:backdrop-blur-sm rounded-lg lg:p-4">
                    <h3 className="mb-2 font-semibold text-2xl">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-stone-400 leading-loose">
                      {item.description}
                    </p>
                    <div className="lg:flex lg:items-center lg:justify-end lg:flex-wrap">
                      <Iterate
                        items={item.technologies}
                        render={(tech, idx) => <Tag key={idx}>{tech}</Tag>}
                      />
                    </div>
                  </div>
                </div>
              </If>
              <If condition={(idx + 1) % 2 !== 0}>
                <div
                  key={idx}
                  className="mb-10 flex flex-wrap items-center lg:mb-10 lg:relative lg:justify-start lg:text-left"
                >
                  <div className="w-full lg:flex lg:items-center lg:absolute lg:-z-10 lg:border lg:border-stone-300/30 lg:w-1/4 lg:border-b-0 lg:border-r-0 lg:rounded-lg overflow-hidden lg:p-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={250}
                      height={250}
                      className="mb-6 lg:w-full rounded object-cover lg:mb-0 lg:max-h-[300px] lg:rounded-lg"
                    />
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4 lg:pl-8 lg:relative lg:left-96 lg:backdrop-blur-sm rounded-lg lg:p-4">
                    <h3 className="mb-2 font-semibold text-2xl">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-stone-400 leading-loose">
                      {item.description}
                    </p>
                    <div className="lg:flex lg:items-center lg:justify-start lg:flex-wrap">
                      <Iterate
                        items={item.technologies}
                        render={(tech, idx) => <Tag key={idx}>{tech}</Tag>}
                      />
                    </div>
                  </div>
                </div>
              </If>
            </>
          )}
        />
      </div>
    </section>
  );
}
