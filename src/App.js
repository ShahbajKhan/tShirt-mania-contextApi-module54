import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Grandpa from "./components/Grandpa/Grandpa";
import Main from "./layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "orderreview", element: <OrderReview></OrderReview> },
        { path: "grandpa", element: <Grandpa></Grandpa> },
      ],
    },
    { path: "*", element: <div>This route not found: 404</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
