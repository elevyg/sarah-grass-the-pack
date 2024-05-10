"use client";
import Image from "next/image";
import { type Offering } from "strapi-types/types/api/offering";
import { motion } from "framer-motion";
import Link from "next/link";
import { stringTimeToDate } from "~/utils/indext";

interface Props {
  title?: string;
  offerings: Offering[];
}

const imageMotion = {
  rest: {
    borderRadius: `1rem`,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  hover: {
    borderRadius: `0rem`,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const textMotion = {
  rest: {
    textDecoration: "unset",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  hover: {
    textDecoration: "underline",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Offerings = ({ title, offerings }: Props) => {
  return (
    <div id="offering-container" className="flex-flex-col w-full flex-1">
      <div
        id="offering-header"
        className="w-full border-b-2 border-matteBlack py-2 pl-2"
      >
        <h2 className="text-lg uppercase">{title}</h2>
      </div>
      <div
        id="offering-content-container"
        className="relative grid grid-cols-1 items-start justify-between pb-5 md:grid-cols-2"
      >
        <div className=" absolute bottom-0 left-1/2 top-0 hidden h-full w-0.5 bg-matteBlack md:block" />
        {offerings.map((offering) => (
          <motion.div
            key={offering.id}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`flex flex-col items-center border-b-2 border-matteBlack p-10`}
          >
            <motion.div
              className="z-100 relative mb-5 aspect-square w-full overflow-hidden"
              variants={imageMotion}
            >
              <Image
                src={
                  offering.attributes.square_image.data.attributes.formats
                    .medium.url
                }
                alt="image"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>
            <div className="mb-2 flex flex-1 flex-col">
              <h3 className="text-3xl font-bold">
                {offering.attributes.title}
              </h3>
              {offering.attributes.instructors?.data.map((i) => (
                <p className="mb-4 text-2xl" key={i.id}>
                  {i.attributes.full_name}
                </p>
              ))}
              <p className="mb-4">{offering.attributes.description}</p>
            </div>
            <div className="mb-4 self-start text-2xl leading-none">
              <p>{offering.attributes.days}</p>
              <p>
                {!!offering.attributes.starting_date &&
                  new Date(
                    offering.attributes.starting_date as unknown as string,
                  ).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                  })}
                {" - "}
                {!!offering.attributes.ending_date &&
                  new Date(
                    offering.attributes.ending_date as unknown as string,
                  ).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                  })}
              </p>
              <p>
                {!!offering.attributes.starting_time &&
                  stringTimeToDate(
                    offering.attributes.starting_time as unknown as string,
                  ).toLocaleString("en-US", { hour: "numeric", hour12: true })}
                {" - "}
                {!!offering.attributes.ending_time &&
                  stringTimeToDate(
                    offering.attributes.ending_time as unknown as string,
                  ).toLocaleString("en-US", { hour: "numeric", hour12: true })}
              </p>
            </div>
            <motion.div variants={textMotion} className="self-start text-2xl">
              <Link href={`/offering/${offering.attributes.slug}`}>
                LEARN MORE
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
