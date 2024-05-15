import React from "react";
import Markdown from "~/app/_components/markdown";
import { api } from "~/trpc/server";
import markdownToHtml from "~/utils/markdownToHtml";

const Footer = async () => {
  const texts = await api.getFooter();
  const address = await markdownToHtml(texts.attributes.address, {
    p: "paragraph",
  });
  const visitHours = await markdownToHtml(texts.attributes.visitHours, {
    p: "paragraph",
  });

  return (
    <footer className="flex w-full flex-col gap-3 p-4 md:flex-row md:justify-between md:p-5 md:pb-16">
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
      <div>
        <h3 className="heading-2-az">Mailing List</h3>
        {/* TODO */}
      </div>
    </footer>
  );
};

export default Footer;
