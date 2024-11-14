import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <>
      <section className="bg-allium-cream/60 top-0 z-50 sticky backdrop-blur-sm h-fit w-full flex flex-row justify-center md:justify-between mb-8 px-12 lg:px-32 pb-4 pt-4 border-b border-allium-cream">
        <div className="flex flex-row w-full text-lg lg:text-2xl items-center justify-between font-semibold tracking-normal lg:tracking-tighter">
          <Link href="/">
            <Image src="/branding/10.png" width={75} height={75} alt="Allium" />
          </Link>
          <div className="flex flex-row gap-8 lg:gap-12">
            <Link
              href="https://alliumapparel.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 decoration-lime-800"
            >
              Apparel
            </Link>
            <Link
              href="/products"
              className="hover:underline underline-offset-4 decoration-lime-800"
            >
              Appliances
            </Link>
            <Link
              href="/posts"
              className="hover:underline underline-offset-4 decoration-lime-800"
            >
              Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
