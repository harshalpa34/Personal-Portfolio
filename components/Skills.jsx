import { cn } from "@/utils/cn";
import { skillsData } from "@/utils/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-[90%] md:max-w-4xl mx-auto mt-10 md:mt-40 mb-6">
      <h2 className="text-center text-5xl md:text-7xl font-bold text-white font-[Rowdies]">
        My Skills
      </h2>
      <div className="mt-14 flex items-center justify-center flex-wrap gap-6">
        {skillsData.map((skill, i) => (
          <div
            className="cursor-pointer flex flex-col justify-center items-center  w-40 h-40 shadow-md shadow-emerald-900 bg-zinc-900 hover:bg-zinc-700 rounded-md group"
            key={i}
          >
            <Image
              src={skill.svg}
              alt={skill.title}
              width={100}
              height={100}
              className={cn(
                "object-contain group-hover:hidden  bg-clip-border ",
                skill.title === 'MongoDB' && ""
              )}
            />
            <p className=" font-bold font-[Poppins] text-xl hidden text-md text-zinc-300  group-hover:block">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
