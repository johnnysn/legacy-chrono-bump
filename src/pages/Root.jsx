import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import "./Root.css";

const Root = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main-inner">
          <Outlet/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Root;
