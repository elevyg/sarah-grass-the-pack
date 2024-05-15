import classNames from "classnames";
import parse, { type HTMLElement, NodeType } from "node-html-parser";

const classMap = new Map(
  Object.entries({
    p: "paragraph py-2",
    h1: "heading-1",
    h2: "heading-2",
    ol: "list-decimal list-inside paragraph",
    ul: "list-disc paragraph pl-10",
  }),
);

function addTailwindClasses(
  node: HTMLElement,
  customClass?: Map<string, string>,
) {
  if (node.nodeType === NodeType.ELEMENT_NODE) {
    const tagName = node.tagName?.toLowerCase();
    const tailwindClass = customClass?.get(tagName) ?? classMap.get(tagName);

    if (tailwindClass) {
      node.setAttribute(`class`, classNames(tailwindClass));
    }

    for (const childNode of node.childNodes) {
      addTailwindClasses(childNode as HTMLElement, customClass);
    }
  }
}

export default function convertStringToHTML(
  htmlString?: string,
  customClass?: Map<string, string>,
) {
  if (!htmlString) return;
  const html = parse(htmlString);

  addTailwindClasses(html, customClass);
  return html;
}
