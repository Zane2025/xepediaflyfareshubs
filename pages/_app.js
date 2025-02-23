import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
