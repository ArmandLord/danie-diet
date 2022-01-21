import { Navbar } from "../index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-auto flex-col">{children}</div>
    </>
  );
};

export default Layout;
