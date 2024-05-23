import Navbar from "~/app/_components/navbar";
import { type SearchParams } from "../../middleware";

type Request = { searchParams: SearchParams };

export default function OfferingPage({ searchParams }: Request) {
  return (
    <div className="bg-yellow min-h-screen w-full">
      <Navbar mode={searchParams.viewport} className="bg-yellow" />
    </div>
  );
}
