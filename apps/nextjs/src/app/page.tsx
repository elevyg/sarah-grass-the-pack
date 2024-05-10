import GeometricFigures from "~/app/_components/geometric-figures";
import Offerings from "~/app/_components/offerings";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";

export default async function Home() {
  const texts = await api.getLandingTexts();
  const offerings = await api.getOfferings();

  return (
    <main className="flex min-h-screen flex-col bg-eggWhite">
      <div className="flex min-h-screen flex-1 items-center justify-center">
        <GeometricFigures />
      </div>
      <Section color="mint">
        <Offerings
          title={texts.attributes.offering_header}
          offerings={offerings}
        />
      </Section>
      <Section color="lavander">
        <h2>{texts.attributes.journal_header}</h2>
      </Section>
      <h2>{texts.attributes.artist_work_header}</h2>
    </main>
  );
}
