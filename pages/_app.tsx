import { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
