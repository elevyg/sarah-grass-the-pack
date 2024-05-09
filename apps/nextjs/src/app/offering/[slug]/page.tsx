import React from "react";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";

const Page = async ({ params }: { params: { slug: string } }) => {
  const offering = await api.getOffering(params.slug);

  return (
    <main className="min-h-screen bg-eggWhite">
      <Section lowerBorderOnly color="mint">
        {offering.attributes.title}
      </Section>
    </main>
  );
};

export default Page;
