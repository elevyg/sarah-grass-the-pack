import GeometricFigures from "~/app/_components/geometric-figures";
import Offerings from "~/app/_components/offerings";
import { api } from "~/trpc/server";

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
        <Offerings
          title={data.attributes.offering_header}
          offerings={offerings}
        />
      </div>
      <h2>{data.attributes.journal_header}</h2>
      <h2>{data.attributes.artist_work_header}</h2>
    </main>
  );
}
