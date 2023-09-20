import { AppProps } from "next/app";
import "../styles/index.css";

import { Mulish, Lora, Montserrat, Open_Sans, Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`w-full ${font.className} tracking-wider leading-normal`}>
      <Component {...pageProps} />
    </main>
  );
}
