import GeometricFigures from "~/app/_components/geometric-figures";
import { api } from "~/trpc/server";
import Image from "next/image";

export default async function Home() {
  const data = await api.getLanding();
  const offerings = await api.getOfferings();

  return (
    <main className="flex min-h-screen flex-col bg-eggWhite">
      <div className="flex min-h-screen flex-1 items-center justify-center">
        <GeometricFigures />
      </div>
      <div className="flex w-full  border-y-2 border-matteBlack">
        <div
          id="left-color-index"
          className="h-full, w-4 border-r-2 border-matteBlack bg-mint"
        ></div>
        <div id="offering-container" className="flex-flex-col w-full flex-1">
          <div
            id="offering-header"
            className="w-full border-b-2 border-matteBlack py-2 pl-2"
          >
            <h2 className="text-lg uppercase">
              {data.attributes.offering_header}
            </h2>
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
                  <p>{offering.attributes.instructor}</p>
                  <p>{offering.attributes.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2>{data.attributes.journal_header}</h2>
      <h2>{data.attributes.artist_work_header}</h2>
    </main>
  );
}
