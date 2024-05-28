"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type Offering } from "strapi-types/types/api/offering";
import { formatDate } from "~/utils/formatDate";

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

const Offerings = ({ title, offerings }: Props) => {
  const lastOfferingIndex = offerings.length - 1;

  return (
    <div id="offering-container" className="flex w-full flex-1 flex-col">
      <div
        id="offering-header"
        className="w-full border-b-2 border-matteBlack bg-mint py-3 pl-2 md:bg-eggWhite"
      >
        <h2 className="heading-1">{title}</h2>
      </div>
      <div
        id="offering-content-container"
        className="relative grid grid-cols-1 items-start justify-between md:grid-cols-2"
      >
        <div className=" absolute bottom-0 left-1/2 top-0 hidden h-full w-0.5 bg-matteBlack md:block" />
        {offerings.map((offering, index) => (
          <OfferingCard
            key={offering.id}
            offering={offering}
            index={index}
            lastOfferingIndex={lastOfferingIndex}
          />
        ))}
      </div>
    </div>
  );
};

const OfferingCard = ({
  offering,
  index,
  lastOfferingIndex,
}: {
  offering: Offering;
  index: number;
  lastOfferingIndex: number;
}) => {
  const { endingDate, endingTime, startingDate, startingTime } =
    formatDate(offering);
  return (
    <motion.div
      key={offering.id}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`flex flex-col items-center border-b-2 border-matteBlack p-10 ${index === lastOfferingIndex ? "border-b-0 md:border-b-0" : ""} ${index === lastOfferingIndex - 1 ? "border-b-0 md:border-b-0" : ""}`}
    >
      <motion.div
        className="z-100 relative mb-5 aspect-square w-full overflow-hidden"
        variants={imageMotion}
      >
        <Image
          src={
            offering.attributes.square_image.data.attributes.formats.medium.url
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
      <div className="mb-4 flex flex-1 flex-col">
        <h3 className="heading-2 mb-4">{offering.attributes.title}</h3>
        {offering.attributes.instructors?.data.map((i) => (
          <p className="heading-2-az mb-6" key={i.id}>
            {i.attributes.full_name}
          </p>
        ))}
        <p className="paragraph mb-4">{offering.attributes.description}</p>
      </div>
      <div className="heading-2-az mb-4 self-start leading-none">
        {offering.attributes.days ?? <p>{offering.attributes.days}</p>}
        {startingDate && endingDate && (
          <p>{`${startingDate} - ${endingDate}`}</p>
        )}
        {startingTime && endingTime && (
          <p>{`${startingTime} - ${endingTime}`}</p>
        )}
      </div>
      <motion.div className="self-start text-2xl">
        <Link href={`/offerings/${offering.attributes.slug}`}>LEARN MORE</Link>
      </motion.div>
    </motion.div>
  );
};

export default Offerings;
