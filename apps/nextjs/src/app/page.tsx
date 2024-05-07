import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.getLanding();
  return (
    <main className="min-h-screen bg-eggWhite">
      <h2>{data.attributes.offering_header}</h2>
      <h2>{data.attributes.journal_header}</h2>
      <h2>{data.attributes.artist_work_header}</h2>
    </main>
  );
}
