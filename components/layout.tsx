import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="h-full">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
