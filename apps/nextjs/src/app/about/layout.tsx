import Footer from "~/app/_components/footer";

export default function AboutLayout(props: {
  children: React.ReactNode;
  params: unknown;
}) {
  return (
    <>
      <main className="">{props.children}</main>
      <Footer />
    </>
  );
}
