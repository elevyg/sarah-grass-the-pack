import Footer from "~/app/_components/footer";
import Navbar from "~/app/_components/navbar";
import OfferingsDashboard from "~/app/offerings/_offerings-dashboard";
import { api } from "~/trpc/server";
import { type SearchParams } from "../../middleware";

type Request = { searchParams: SearchParams };

export default async function OfferingPage({ searchParams }: Request) {
  const initialOfferings = await api.getOfferings({ offeringTypeInfo: true });
  const texts = await api.getOfferingsGalleryTexts();
  const offeringTypes = await api.getOfferingTypes();

  return (
    <div className="flex flex-col bg-eggWhite">
      <div>
        <Navbar mode={searchParams.viewport} className="bg-eggWhite" />
        <div className="pt-[4rem] md:pt-[5rem]">
          <OfferingsDashboard
            initialOfferings={initialOfferings}
            offeringTypes={offeringTypes}
            actionButtonTitle={
              texts.attributes.actionButtonCard ?? "LEARN MORE"
            }
          />
        </div>
      </div>
      <Footer className="border-t-2 border-matteBlack bg-eggWhite" />
    </div>
  );
}
