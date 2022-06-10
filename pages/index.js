import Head from "next/head";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Middle from "../components/Middle";

import Navigations from "../components/Navigations";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amtica</title>
      </Head>
      <main>
        <Navigations />
        <Content />
        <Middle />
        <Footer />

      

      </main>
    </div>
  );
}
