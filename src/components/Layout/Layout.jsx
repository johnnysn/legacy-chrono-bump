import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main-inner">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
