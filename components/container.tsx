type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 text-2xl md:text-4xl">
      {children}
    </div>
  );
};

export default Container;
