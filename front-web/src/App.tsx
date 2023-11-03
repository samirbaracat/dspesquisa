import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Records } from "./pages/Records";
import { Home } from "./pages/Home";
import './App.css';
import { Charts } from "./pages/Charts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/records",
        element: <Records />
      },
      {
        path: "/charts",
        element: <Charts />
      },
    ]
  }
])

export { router }