import GeometricFigures from "~/app/_components/geometric-figures";
import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.getLanding();
  return (
    <main className="flex min-h-screen flex-col bg-eggWhite">
      <div className="flex flex-1 items-center justify-center">
        <GeometricFigures />
      </div>
      <h2>{data.attributes.offering_header}</h2>
      <h2>{data.attributes.journal_header}</h2>
      <h2>{data.attributes.artist_work_header}</h2>
    </main>
  );
}
