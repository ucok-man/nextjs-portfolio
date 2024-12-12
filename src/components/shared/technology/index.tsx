import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

export default function Technology() {
  return (
    <div className="pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl text-stone-300">
        Technologies i used
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="p-4">
          <TbBrandTypescript className="text-7xl text-blue-400" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
}
