import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { useRouter } from "next/router";

import AlliumFooterLogo from "/public/branding/20.png";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const onPageStyles = "hidden";

  return (
    <footer
      className="relative h-[36rem] lg:h-[40rem]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed w-full bottom-0 h-[36rem] lg:h-[40rem] bg-allium-green text-allium-cream px-4 lg:px-12 pt-12 lg:pt-16">
        <div className="w-full lg:w-96 text-base lg:text-lg flex flex-row items-start justify-between mb-24 lg:mb-36 px-8 text-left py-6 lg:py-0 border-y lg:border-none border-allium-darkgreen">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-full">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
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
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/apparel">Apparel</Link>
            <Link href="/products">Products</Link>
            <Link href="/blog">Blog</Link>
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

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 mb-8">
          <Link href="/">
            <Image
              src={AlliumFooterLogo}
              width={2400}
              height={600}
              alt="Allium"
              placeholder="blur"
              className="h-20 lg:h-48 w-auto"
            />
          </Link>
          <p className="w-fit text-sm text-allium-cream/80">
            &copy; {currentYear} AlliumApparel. All rights reserved.
          </p>
        </div>

        <div className="w-full  flex items-end justify-center text-center text-allium-cream/40 text-xs">
          <p
            className={clsx({
              [onPageStyles]: router.pathname === "/",
            })}
          >
            As an Amazon Associate I earn from qualifying purchases. Allium
            receives a commission on all purchases made through our Amazon
            links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
