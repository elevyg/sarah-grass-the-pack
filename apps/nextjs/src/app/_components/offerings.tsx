import HeadingContainer from "~/app/_components/heading-container";
import OfferingCard from "~/app/_components/offering-card";
import { api } from "~/trpc/server";

interface Props {
  title?: string;
}

const Offerings = async ({ title }: Props) => {
  const offerings = await api.getOfferings({ status: "upcoming" });
  const lastOfferingIndex = offerings.length - 1;

  return (
    <div id="offering-container" className="flex w-full flex-1 flex-col">
      <HeadingContainer id="offering-header" className="bg-mint md:bg-eggWhite">
        <h2 className="heading-1">{title}</h2>
      </HeadingContainer>
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

export default Offerings;
