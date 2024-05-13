import { remark } from "remark";
import html from "remark-html";

const markdownToHtml = async (text: string | undefined) => {
  const transformedHtml = (await remark().use(html).process(text)).toString();
  return transformedHtml;
};

export default markdownToHtml;
