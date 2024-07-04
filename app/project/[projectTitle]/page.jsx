"use client";

import { projectData } from "@/utils/data";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const page = ({ params: { projectTitle } }) => {
  const router = useRouter();
  const project = projectData.find((item) => {
    return item.title.toLowerCase().split(" ").join("-") === projectTitle;
  });

  return (
    <div className="bg-stone-950 min-h-screen">
      <div className="text-white px-3 py-14 md:p-14  w-[95%] mx-auto">
        <div
          className="p-3 rounded-[50%] absolute top-2 left-2 md:top-4 md:left-4 cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft className=" w-10 h-10 text-white" />
        </div>
        <div className="mt-5 md:max-w-5xl mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{ delay: 2000 }}
            centeredSlides={true}
            loop={true}
            controller={{
              inverse: true,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 3,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full"
          >
            <SwiperSlide className="!w-[70%]">
              <Image
                width={"100%"}
                height={"auto"}
                src={project.image}
                alt={project.title}
              />
            </SwiperSlide>
            {project?.imageArray?.map((image, index) => {
              return (
                <SwiperSlide key={index} className="!w-[70%]">
                  <Image
                    width={"100%"}
                    height={"auto"}
                    src={image}
                    alt={project.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className=" md:max-w-5xl mx-auto mt-8 md:mt-10 font-[Poppins]">
          <h2 className="flex justify-between items-center w-full text-zinc-400 text-4xl md:text-6xl font-[Rowdies]">
            {project.title}
            {!project.isDown && (
              <Link
                href={project.demoLink}
                className="px-3 py-1.5 bg-slate-600 text-neutral-900 text-sm rounded-sm hover:text-slate-400 hover:bg-neutral-800 transition"
              >
                Live Demo
              </Link>
            )}
          </h2>
          <p className="my-4">{project.about}</p>
          <ul>
            {project?.subPoints?.map((item) => (
              <li
                key={item.title}
                className="list-[circle] my-3 text-zinc-300 text-md "
              >
                <strong className="text-xl text-zinc-100">
                  {item.title} :{" "}
                </strong>
                {item.about}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
