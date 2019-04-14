import Head from "next/head";
import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  const states = {
    pageTitle: props.pageTitle == "" || props.pageTitle == undefined ? "" : props.pageTitle
  };
  return(
    <div>
      <Head>
        <title>Plan lekcji { states.pageTitle }</title>
        <meta name="description" content="Aplikacja internetowa z planem lekcji."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="Plan lekcji, ZSB, Plan, Szkoła, Technikum, Technikum nr. 4, Rybnik, Zawisła"/>
        <meta name="author" content="Krzysztof Zawisła"/>
        <meta name="owner" content="Krzysztof Zawisła"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="theme-color" content="#e05416"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Aplikacja internetowa z planem lekcji."/>
        <meta property="og:image" content="/static/logo.png"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Plan lekcji ZSB"/>
        <meta name="twitter:site" content="@SnewDrep"/>
        <meta name="twitter:description" content="Aplikacja internetowa z planem lekcji."/>
        <meta name="twitter:image" content="/static/favicon.png"/>
        <meta name="twitter:creator" content="Krzysztof Zawisła"/>
        <meta name="msapplication-TileColor" content="#e05416"/>
        <link rel="icon" href="/static/favicon.png"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=latin-ext" rel="stylesheet"/>
        <link href="/static/manifest.json" rel="manifest"/>
      </Head>
      <Header/>
      <style jsx global>{`
        *, *::after, *::before {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border: 0;
          outline: 0;
        }
        body {
          font-family: 'Open Sans', sans-serif;
          -webkit-user-select: none;
        }
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>
      <style jsx>{`
        main {
          padding: 15px;
          min-height: calc(100vh - 135.8px);
        }
      `}</style>
      <main>
        { props.children }
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;