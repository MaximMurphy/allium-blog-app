import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-allium-darkbrown border-y-2 border-allium-darkbrown text-allium-cream">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8 md:py-12">
          <Link href="/">
            <Image
              src="/branding/15.png"
              width={160}
              height={160}
              alt="Allium"
              className="h-fit"
            />
          </Link>

          <p className="hidden lg:flex w-fit text-xs">
            &copy; {currentYear} AlliumApparel. All rights reserved.
          </p>

          <div className="w-fit flex flex-row gap-8 text-xl md:text-3xl font-semibold">
            <Link
              href="https://www.etsy.com/shop/AlliumApparel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-orange-600 transition ease-in-out duration-300"
            >
              <Icon icon="simple-icons:etsy" />
            </Link>
            <Link
              href="https://www.pinterest.com/alliumlover/"
              target="_blank"
              rel="noopener noreferrer"
              className="-mt-2 md:mt-0 hover:underline hover:text-red-600 transition ease-in-out duration-300"
            >
              <Icon icon="simple-icons:pinterest" className="w-8 h-8" />
            </Link>
          </div>

          <p className="lg:hidden flex w-fit text-xs text-center">
            &copy; {currentYear} AlliumApparel. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
