import Footer from "~/app/_components/footer";
import Section from "~/app/_components/section";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="">{children}</main>
      <Section color="beige">
        <div className="w-full">
          <Footer />
        </div>
      </Section>
    </>
  );
}
