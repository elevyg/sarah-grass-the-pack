import React from "react";
import Markdown from "~/app/_components/markdown";
import { api } from "~/trpc/server";
import markdownToHtml from "~/utils/markdownToHtml";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Footer = async (props: Props) => {
  const texts = await api.getFooter();

  const address = await markdownToHtml(texts.attributes.address, {
    p: "paragraph",
  });
  const visitHours = await markdownToHtml(texts.attributes.visitHours, {
    p: "paragraph",
  });

  return (
    <footer
      {...props}
      className={
        "flex flex-col gap-3 p-4 md:w-full md:flex-row md:justify-start md:gap-40 md:p-6 md:pb-16 " +
        props.className
      }
    >
      <div>
        <h3 className="heading-2-az pb-2">{texts.attributes.title}</h3>
        <Markdown content={address} />
      </div>
      <div>
        <h3 className="heading-2-az pb-2">
          {texts.attributes.visitHoursTitle}
        </h3>
        <Markdown className="flex flex-col" content={visitHours} />
      </div>
      <div>
        <h3 className="heading-2-az pb-2">{texts.attributes.contactTitle}</h3>
        <p className="paragraph">
          <a href={`mailto:${texts.attributes.contactEmail}`}>Email</a>
        </p>
        <p className="paragraph">
          <a href={texts.attributes.instagramLink} target="_blank">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
