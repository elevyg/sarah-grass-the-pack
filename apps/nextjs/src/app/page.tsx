import GeometricFigures from "~/app/_components/geometric-figures";
import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.getLanding();
  return (
    <main className="flex min-h-screen flex-col bg-eggWhite">
      <div className="flex flex-1 items-center justify-center">
        <GeometricFigures />
      </div>
      <div className="flex w-full  border-y-2 border-matteBlack">
        <div
          id="left-color-index"
          className="bg-mint h-full, w-4 border-r-2 border-matteBlack"
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
          <div id="offering-content-container" className="h-80"></div>
        </div>
      </div>
      <h2>{data.attributes.journal_header}</h2>
      <h2>{data.attributes.artist_work_header}</h2>
    </main>
  );
}
