import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AlliumFooterLogo from "/public/branding/20.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-allium-green border-y lg:border-y-2 border-allium-darkbrown text-allium-cream px-4 py-12 lg:py-16">
      <Container>
        <div className="flex flex-row items-start justify-between mb-12 gap-4">
          <Link href="/">
            <Image
              src={AlliumFooterLogo}
              width={2400}
              height={600}
              alt="Allium"
              placeholder="blur"
              className="h-12 lg:h-16 w-auto"
            />
          </Link>
          <div className="w-fit flex flex-row gap-6 lg:gap-8 font-semibold mt-2 lg:mt-0">
            <Link
              href="https://www.etsy.com/shop/AlliumApparel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-orange-600 transition ease-in-out duration-300"
            >
              <Icon
                icon="simple-icons:etsy"
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </Link>
            <Link
              href="https://www.pinterest.com/alliumlover/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-600 transition ease-in-out duration-300"
            >
              <Icon
                icon="simple-icons:pinterest"
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </Link>
          </div>
        </div>
        <div className="relative flex">
          <div className="w-full lg:w-64 text-lg flex flex-row items-start justify-between mb-12 py-4 border-y lg:border-none border-allium-darkgreen">
            <div className="flex flex-col gap-4">
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/apparel">Apparel</Link>
              <Link href="/products">Products</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 text-justify text-allium-cream/60">
          <p className="w-fit text-xs">
            &copy; {currentYear} AlliumApparel. All rights reserved.
          </p>
          <p className="w-fit text-xs">
            As an Amazon Associate I earn from qualifying purchases. Allium
            receives a commission on all purchases made through our Amazon
            links.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
