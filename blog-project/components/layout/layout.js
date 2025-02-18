import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
