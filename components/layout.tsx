import Footer from "./footer";
import Header from "./header";
import Marquee from "./marquee";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="h-full">
        <main>{children}</main>
      </div>
      <Marquee />
      <Footer />
    </>
  );
};

export default Layout;
