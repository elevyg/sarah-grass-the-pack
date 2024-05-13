import classNames from "classnames";
import parse, { type HTMLElement, NodeType } from "node-html-parser";

const classMap = new Map(
  Object.entries({
    p: "leading-8 py-2",
    h1: "text-2xl font-bold",
    ol: "list-decimal list-inside",
    ul: "list-disc pl-10",
  }),
);

function addTailwindClasses(node: HTMLElement) {
  if (node.nodeType === NodeType.ELEMENT_NODE) {
    const tagName = node.tagName?.toLowerCase();
    const tailwindClass = classMap.get(tagName);

    if (tailwindClass) {
      node.setAttribute(`class`, classNames(tailwindClass));
    }

    for (const childNode of node.childNodes) {
      addTailwindClasses(childNode as HTMLElement);
    }
  }
}

export default function convertStringToHTML(htmlString?: string) {
  if (!htmlString) return;
  const html = parse(htmlString);
  addTailwindClasses(html);
  return html;
}
