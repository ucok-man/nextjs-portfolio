import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pb-4 lg:mb-36 relative bottom-8">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Picture */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <Image
              src="/funny-man-rmbg.png"
              alt="Profile Pic"
              width={500}
              height={500}
              className="border object-contain w-full h-full max-h-[500px] border-none rounded-3xl"
            />
          </div>
        </div>

        {/* Title */}
        <div className="w-full lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start">
            <p className="relative left-1 text-muted font-mono mb-4 max-md:mb-2 max-md:tracking-tighter text-right">
              Hi, my name is
            </p>
            <h2 className="text-moody-700 text-center lg:text-left text-6xl lg:text-8xl tracking-tighter mb-4 font-semibold">
              Alvin Odhi Nusantara.
            </h2>
            <p className="bg-gradient-to-r from-stone-300 font-extralight font-mono to-stone-600 bg-clip-text text-2xl lg:text-4xl text-transparent mb-4">
              I build the Web
            </p>
            <p className="mb-8 text-center text-stone-300/80 lg:text-left tracking-tight">
              I&apos;m a software developer focused on building innovative web
              solutions and modern applications. Currently, I&apos;m enhancing
              my skills by joining a bootcamp at Purwadhika.
            </p>
            <Button
              asChild
              variant="secondary"
              className="p-5 text-sm font-bold bg-stone-300 text-stone-800 mb-10 hover:bg-stone-300/90"
            >
              <a
                href="/resume.example.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Donwload Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
