import React, { FunctionComponent } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { SeoHeader } from './SeoHeader';
import Script from 'next/script'
type HeadProps = {
}

export const HeadComponennt: FunctionComponent<HeadProps> = ({ children }) => {
  const path: string = useRouter().asPath
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <SeoHeader />

      <div hidden id="snipcart" data-api-key="MzQwMDZmNzMtNTEyNi00YjM0LTllODAtOGNhNDJmYTYxOGEwNjM3ODMxMjU2MzI5MDQ0NDcz"></div>
      {children}
      <Script async src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"></Script>
      <div id="snipcart" data-config-modal-style="side" data-api-key="MzQwMDZmNzMtNTEyNi00YjM0LTllODAtOGNhNDJmYTYxOGEwNjM3ODMxMjU2MzI5MDQ0NDcz" hidden></div>
    </>
  )
}