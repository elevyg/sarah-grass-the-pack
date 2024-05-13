import Markdown from "~/app/_components/markdown";
import { api } from "~/trpc/server";
import markdownToHtml from "~/utils/markdownToHtml";

export default async function About() {
  const texts = await api.getAboutTexts();

  const secondBlockHtml = await markdownToHtml(
    texts.attributes.second_block_text,
  );

  console.log(secondBlockHtml);

  return (
    <div>
      <div>
        <h2>{texts.attributes.second_block_title}</h2>
        <Markdown content={secondBlockHtml} />
      </div>
      <ul className="list-disc pl-10">
        <li className="list-item">hola</li>
        <li>chao</li>
      </ul>
    </div>
  );
}
