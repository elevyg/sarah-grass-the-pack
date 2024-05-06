import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.getLanding();
  console.log(data);
  console.log(data.attributes.artist_work_header);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-eggWhite"></main>
  );
}
