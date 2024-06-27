import { projectData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-[90%] md:max-w-6xl text-white mt-16 md:mt-40 mx-auto min-h-screen mb-10">
      <h2 className="text-5xl md:text-7xl font-[Rowdies] text-center">
        My Work
      </h2>
      <div className="w-[100%] justify-center flex flex-wrap gap-6 mt-10">
        {projectData.map((project, i) => (
          <div
            className= " w-[300px] md:w-[350px]  overflow-hidden bg-red-950 cursor-pointer group relative shadow-md rounded-md hover:shadow-gray-800"
            key={i}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={"100%"}
              height={"100%"}
              className="object-fit z-10"
            />
            <div className="z-20 shadow-2xl shadow-gray-900 h-[100%] absolute opacity-0 bottom-0 left-0 w-full bg-black/[0.7]  flex flex-col gap-4 items-center justify-center group-hover:opacity-100 transition-all">
              <h3 className="text-slate-300 font-bold text-center text-3xl hidden group-hover:block">
                {project.title}
              </h3>
              <div className="flex gap-4">
                <Link
                  className="px-2 py-1 bg-slate-400 text-black font-[Poppins] font-semibold rounded-md"
                  href={`/project/${project.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                >
                  Info
                </Link>
                {!project.isDown && (
                  <Link
                    href={project.demoLink}
                    className="px-2 py-1 bg-emerald-600 text-black font-[Poppins] font-semibold rounded-md"
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
