import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.getLanding();
  console.log(data.data);
  return (
    <main className="bg-eggWhite flex min-h-screen flex-col items-center justify-center"></main>
  );
}
