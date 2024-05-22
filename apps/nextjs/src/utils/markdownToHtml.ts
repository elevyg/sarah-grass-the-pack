import { remark } from "remark";
import html from "remark-html";
import convertStringToHTML from "~/utils/addTailwindClasses";

const markdownToHtml = async (
  text: string | undefined,
  customClass?: Record<string, string>,
) => {
  if (text === undefined) return "";

  const transformedHtml = (await remark().use(html).process(text)).toString();

  const c = customClass ? new Map(Object.entries(customClass)) : undefined;

  return convertStringToHTML(transformedHtml, c)?.toString() ?? "";
};

export default markdownToHtml;
