import Image from "next/image";
import React from "react";
import { api } from "~/trpc/server";

interface Props {
  title?: string;
}

const Offerings = async ({ title }: Props) => {
  const offerings = await api.getOfferings();

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
        className="relative grid grid-cols-2 items-start justify-between pb-5"
      >
        <div className="absolute bottom-0 left-1/2 top-0 h-full w-0.5 bg-matteBlack" />
        {offerings.map((offering) => (
          <div
            key={offering.id}
            className={`flex w-auto flex-col  items-center border-b-2 border-matteBlack p-10`}
          >
            <div className="mb-5 inline-block overflow-hidden rounded-[40px]">
              <Image
                src={
                  offering.attributes.squared_image.data.attributes.formats
                    .medium.url
                }
                alt="image"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl">{offering.attributes.title}</h3>
              {offering.attributes.instructors?.data.map((i) => (
                <p key={i.id}>{i.attributes.full_name}</p>
              ))}
              <p>{offering.attributes.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
