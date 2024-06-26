"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type Offering } from "strapi-types/types/api/offering";
import { formatDate } from "~/utils/formatDate";

const imageMotion = {
  rest: {
    borderRadius: `2rem`,
    transition: {
      duration: 0.2,
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
      className={`flex flex-col items-center border-b-2 border-matteBlack p-44px md:p-60px ${index === lastOfferingIndex ? "border-b-0 md:border-b-0" : ""} ${index === lastOfferingIndex - 1 ? "border-b-0 md:border-b-0" : ""} last:border-b-0 `}
    >
      <Link
        href={`/offerings/${offering.attributes.slug}`}
        passHref
        className="w-full"
      >
        <motion.div
          whileHover="hover"
          animate="rest"
          className="z-100 relative mb-5 aspect-square w-full overflow-hidden"
          variants={imageMotion}
        >
          <Image
            src={
              offering.attributes.square_image.data.attributes.formats.medium
                .url
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
      </Link>
      <div className="flex flex-col gap-24px md:gap-44px">
        <div className="flex flex-1 flex-col">
          <Link href={`/offerings/${offering.attributes.slug}`}>
            <h3 className="heading-1 md:heading-2 mb-4">
              {offering.attributes.title}
            </h3>
          </Link>
          {offering.attributes.instructors?.data.map((i) => (
            <p className="heading-2-az md:heading-1-az mb-6" key={i.id}>
              {i.attributes.full_name}
            </p>
          ))}
          <p className="paragraph">{offering.attributes.description}</p>
        </div>
        <div className="heading-2-az md:heading-1-az self-start leading-none">
          {offering.attributes.days ?? <p>{offering.attributes.days}</p>}
          {startingDate && endingDate && (
            <p>{`${startingDate} - ${endingDate}`}</p>
          )}
          {startingTime && endingTime && (
            <p>{`${startingTime} - ${endingTime}`}</p>
          )}
        </div>
        <motion.div className="heading-2 self-start text-2xl md:text-[1.875rem]">
          <Link href={`/offerings/${offering.attributes.slug}`}>
            LEARN MORE
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OfferingCard;
