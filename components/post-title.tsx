import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center text-allium-darkbrown">
      {children}
    </h1>
  );
};

export default PostTitle;
