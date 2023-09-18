import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center justify-center gap-72">
          <Link href="/">
            <Image
              src="/branding/6.png"
              width={160}
              height={160}
              alt="Allium"
            />
          </Link>
          <p className="w-fit mt-4 text-xs">
            © 2023 AlliumApparel. All rights reserved.
          </p>
          <div className="w-fit flex flex-row gap-8 text-xl md:text-3xl font-semibold">
            <Link
              href="https://www.etsy.com/shop/AlliumApparel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-orange-600"
            >
              <Icon icon="simple-icons:etsy" />
            </Link>
            <Link
              href="https://www.pinterest.com/alliumlover/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-red-600"
            >
              <Icon icon="simple-icons:pinterest" className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
