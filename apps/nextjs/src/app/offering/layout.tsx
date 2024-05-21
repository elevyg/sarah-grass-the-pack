import Footer from "~/app/_components/footer";
import Navbar from "~/app/_components/navbar";
import Section from "~/app/_components/section";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-[111px]">{children}</main>
      <Section color="beige">
        <div className="w-full">
          <Footer />
        </div>
      </Section>
    </>
  );
}
