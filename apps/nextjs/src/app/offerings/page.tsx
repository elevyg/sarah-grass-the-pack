import Footer from "~/app/_components/footer";
import Navbar from "~/app/_components/navbar";
import OfferingsDashboard from "~/app/offerings/_offerings-dashboard";
import { api } from "~/trpc/server";
import { type SearchParams } from "../../middleware";

type Request = { searchParams: SearchParams };

export default async function OfferingPage({ searchParams }: Request) {
  const initialOfferings = await api.getOfferings({ offeringTypeInfo: true });
  const offeringTypes = await api.getOfferingTypes();

  return (
    <div className="bg-yellow flex min-h-screen w-full flex-col justify-between">
      <div>
        <Navbar mode={searchParams.viewport} className="bg-yellow" />
        <div className="pt-[4rem] md:pt-[6rem]">
          <OfferingsDashboard
            initialOfferings={initialOfferings}
            offeringTypes={offeringTypes}
          />
        </div>
      </div>
      <Footer className="bg-yellow border-t-2 border-matteBlack " />
    </div>
  );
}
