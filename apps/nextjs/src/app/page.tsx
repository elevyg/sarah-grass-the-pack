import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.getLanding();
  return (
    <main className="flex min-h-screen flex-col bg-eggWhite">
      <div className="bg-gray-400 flex flex-1 items-center justify-center">
        <div className="bg-purple-400 relative inline-block h-[608.1px] w-[calc(429.873px*2+608px-185.63px*2)] origin-center">
          <div className="bg-blue-400 absolute left-0 top-0 inline-block  h-[429.873px] w-[429.873px] flex-shrink-0 rounded-full" />
          <div className="bg-green-400 absolute bottom-[calc(608px/2-429px/2)] left-[250px] inline-block h-[429.873px] w-[429.873px] flex-shrink-0 origin-center rotate-45" />
          <div className="bg-red-400  absolute bottom-0 left-[calc(429.873px+156px)] inline-block h-[429.873px] w-[429.873px] flex-shrink-0 origin-center" />
          <div className="bg-yellow-400 absolute left-[calc(185.63px*4)] inline-block h-[429.873px] w-[429.873px] flex-shrink-0 rounded-[51.52389144897461px]" />
          <div className="bg-red-400 absolute bottom-1/2 left-1/2 right-0 top-1/2 z-10 w-full origin-top-left  text-left text-[40px] font-light capitalize text-[#fffcf4]">
            An art school for the Wild
          </div>
        </div>
      </div>
      <h2>{data.attributes.offering_header}</h2>
      <h2>{data.attributes.journal_header}</h2>
      <h2>{data.attributes.artist_work_header}</h2>
    </main>
  );
}
