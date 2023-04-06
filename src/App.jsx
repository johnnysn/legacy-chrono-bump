import Layout from "./components/Layout/Layout";
import Main from "./components/Routes/Main";
import About from "./components/Routes/About";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: "about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
