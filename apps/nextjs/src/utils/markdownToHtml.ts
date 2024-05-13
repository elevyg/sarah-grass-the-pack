import { remark } from "remark";
import html from "remark-html";
import convertStringToHTML from "~/utils/addTailwindClasses";

const markdownToHtml = async (text: string | undefined) => {
  const transformedHtml = (await remark().use(html).process(text)).toString();

  return convertStringToHTML(transformedHtml)?.toString() ?? "";
};

export default markdownToHtml;
