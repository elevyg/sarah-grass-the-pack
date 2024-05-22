import Footer from "~/app/_components/footer";
import Navbar from "~/app/_components/navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-[4rem] md:pt-[6rem]">{children}</main>
      <Footer />
    </>
  );
}
