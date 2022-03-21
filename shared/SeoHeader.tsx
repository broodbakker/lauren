import React, { FunctionComponent } from 'react'
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type seoHeader = {
  subtitle?: string
}
export const SeoHeader: FunctionComponent<seoHeader> = ({ subtitle, children }) => {
  const title = `${subtitle} | ScienceGeek.nl`;
  const desc =
    "";
  const ogImgRelativePath = "/";

  const siteURL = "";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const twitterHandle = "";
  const siteName = "";
  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "nl_NL", //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: "",
          },
        ],
        site_name: siteName,
      }}
      // twitter={{
      //   handle: twitterHandle,
      //   site: twitterHandle,
      //   cardType: "summary_large_image",
      // }}
      additionalMetaTags={[
        {
          property: "author",
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: ``,
        },
        // {
        //   rel: "manifest",
        //   href: "/site.manifest",
        // },
      ]}
    />
  );
}