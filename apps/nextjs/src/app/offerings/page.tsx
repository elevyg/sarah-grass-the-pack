import Navbar from "~/app/_components/navbar";
import { type SearchParams } from "../../middleware";
import { api } from "~/trpc/server";
import OfferingsDashboard from "~/app/offerings/_offerings-dashboard";

type Request = { searchParams: SearchParams };

export default async function OfferingPage({ searchParams }: Request) {
  const initialOfferings = await api.getOfferings();
  const offeringTypes = await api.getOfferingTypes();
  return (
    <div className="bg-yellow min-h-screen w-full">
      <Navbar mode={searchParams.viewport} className="bg-yellow" />
      <div className="pt-[4rem] md:pt-[6rem]">
        <OfferingsDashboard
          initialOfferings={initialOfferings}
          offeringTypes={offeringTypes}
        />
      </div>
    </div>
  );
}
