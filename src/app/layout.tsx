import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.css";
// import BootstrapClient from "./components/BootstrapClient";
import meta from "./utils/metadata";
import "./styles/bootstrap.css"
import "./styles/themify-icons.css";
import "./styles/flaticon.css";
import "./styles/vendors/linericon/style.css";
import "./styles/vendors/animate-css/animate.css";
import "./styles/vendors/jquery-ui/jquery-ui.css";
import "./styles/vendors/lightbox/simpleLightbox.css";
import "./styles/vendors/nice-select/css/nice-select.css";
import "./styles/font-awesome.min.css";
import "./styles/dropdown.css"
import "./styles/style.css";
import "./styles/responsive.css";
import Header from "./components/Header";
import Script from "next/script";
import Banner from "./components/Banner";
import FeatureProducts from "./components/FeatureProducts";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: meta.applicationName,
  authors: meta.authors,
  keywords: meta.keywords,
  openGraph: meta.openGraph,
  twitter: meta.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body className="">
        <Header />
        <Banner />
        {/* <FeatureProducts /> */}
        {children}
        {/* <BootstrapClient /> */}
        <Script src="/js/jquery-3.2.1.min.js"></Script>
        <Script src="/js/popper.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        
        <Script src="/js/stellar.js"></Script>
        <Script src="/vendors/lightbox/simpleLightbox.min.js"></Script>
        <Script src="/vendors/nice-select/js/jquery.nice-select.min.js"></Script>
        <Script src="/vendors/isotope/imagesloaded.pkgd.min.js"></Script>
        <Script src="/vendors/isotope/isotope-min.js"></Script>
        <Script src="/js/jquery.ajaxchimp.min.js"></Script>
        <Script src="/vendors/counter-up/jquery.waypoints.min.js"></Script>
        <Script src="/vendors/counter-up/jquery.counterup.js"></Script>
        <Script src="/js/mail-script.js"></Script>
        <Script src="/js/theme.js"></Script>
      </body>
    </html>
  );
}

