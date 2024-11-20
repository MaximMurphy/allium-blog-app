import { AppProps } from "next/app";
import "../styles/index.css";

import {
  Mulish,
  Lora,
  Montserrat,
  Open_Sans,
  Inter,
  Nunito,
  Rubik,
} from "next/font/google";

const font = Mulish({
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`w-full ${font.className} tracking-wider leading-normal bg-allium-cream`}
    >
      <Component {...pageProps} />
    </main>
  );
}
