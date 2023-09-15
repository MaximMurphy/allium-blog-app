import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between border-red-200">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Allium
          </h3>
          <div className="flex flex-row gap-8 text-xl md:text-3xl font-semibold tracking-tight md:tracking-tighter">
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
