import React from 'react';
import { useRouter } from "next/router";
import { Grommet } from 'grommet';
// Modules
import { AppProps } from 'next/app';
//head
import { HeadComponennt } from '../shared/head';
//style
import { GlobalStyle } from "../shared/global"
import { customTheme } from "../shared/styles"
import { Layout } from "../components/layout"
//state
import { IsCartMenuOpenProvider } from '../state/isCartMenuOpen'
import { IsSearchMenuOpenProvider } from '../state/isSearchMenuOpen'
import { IsNavMenuOpenProvider } from '../state/isNavMenuOpen'
import { ShopCategorySelectedProvider } from '../state/shopCategorySelected'

// import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.

  //   const handleRouteChange = (url: URL) => {
  //     /* invoke analytics function only for production */
  //     if (isProduction) gtag.pageview(url);
  //   };


  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles && jssStyles.parentElement) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }

  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };

  // }, [router.events]);

  return (
    <ShopCategorySelectedProvider>
      <IsNavMenuOpenProvider>
        <IsSearchMenuOpenProvider>
          <IsCartMenuOpenProvider>
            <GlobalStyle />
            <Grommet plain theme={customTheme}>
              <Layout>
                <HeadComponennt>
                  <Component {...pageProps} />
                </HeadComponennt>
              </Layout>
            </Grommet>
          </IsCartMenuOpenProvider>
        </IsSearchMenuOpenProvider>
      </IsNavMenuOpenProvider>
    </ShopCategorySelectedProvider>
  );
};

export default MyApp;