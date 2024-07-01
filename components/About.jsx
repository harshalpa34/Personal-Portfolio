"use client";

import { experienceData } from "@/utils/data";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="text-white mt-10 md:mt-40 ">
      <h2 className="text-4xl md:text-5xl font-[Rowdies] ">About me</h2>
      <div className="flex gap-4 mt-4 flex-col md:flex-row md:items-center ">
        <motion.img
          src="/profilePhoto.jpg"
          alt="Harshal Pagare"
          className="opacity-0 rounded-[8px] overflow-hidden flex-shrink-0 object-cover w-40 h-40  md:w-[200px] md:h-[200px]"
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          }}
        />
        <div>
          <motion.h2
            className="opacity-0 translate-y-full text-2xl md:text-4xl text-zinc-300 font-[Rowdies] font-semibold"
            whileInView={{ opacity: 1, y: 0 }}
          >
            Harshal Pagare
          </motion.h2>
          <motion.p
            className="opacity-0 text-xs md:text-sm text-zinc-300/[0.6] font-[Poppins]"
            whileInView={{ opacity: 1 }}
          >
            22 year's old
          </motion.p>
          <motion.p
            className=" opacity-0  text-xs md:text-sm text-zinc-300/[0.8] font-[Poppins] w-[90%] "
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            }}
          >
            Having worked as a full stack developer for two years, with a focus
            on Next.js and React.js, I have a solid background in building
            dynamic and responsive online applications. I am currently leading
            and supervising three major projects as a frontend developer at a
            seeded company, showcasing my capacity to effectively manage and
            complete challenging tasks. I have also finished two personal
            projects that demonstrate my commitment to lifelong learning and my
            enthusiasm for technology research. I am proficient at creating
            backend with Node.js and AWS Lambda, DynamoDB, managing data storage
            with S3 buckets, AWS, Cognito.
          </motion.p>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-[Rowdies] mt-4">Experience</h2>

      <ol className="border-s mt-6 border-neutral-300 dark:border-neutral-500 w-[90%]">
        {experienceData.map((item, index) => (
          <motion.li
            key={index}
            className="opacity-0 mt-8 "
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.5 * index,
              },
            }}
          >
            <div className="flex-start flex items-center ">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-md text-neutral-300 font-semibold">
                {item.companyName}
                <span className="text-xs ml-2 opacity-60">
                  ({item.startDate.month + " " + item.startDate.year} -{" "}
                  {item.isPresent
                    ? "Present"
                    : item.endDate.month + " " + item.endDate.year}
                  )
                </span>
              </p>
            </div>
            <div className="mb-5 ms-4 mt-1">
              <h4 className="mb-1 text-xl font-semibold font-[Poppins]">
                {item.jobPost}
              </h4>
              <ul
                className="text-xs md:text-sm mb-1 text-neutral-500 dark:text-neutral-300 list-disc pl-4"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.3 }}
              >
                {item.achievements.map((a, i) => (
                  <motion.li
                    className="opacity-0 list-[circle] mt-2"
                    key={i}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 0.2 * i,
                      },
                    }}
                  >
                    {a}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default About;
