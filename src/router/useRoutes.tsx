import { lazy } from "react";
import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Input = lazy(() => import("../pages/input"));

export const useRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "/home",
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/input",
          element: (
            <Suspense fallback={<div>Loading</div>}>
              <Input />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <>Not Found</>,
        },
      ],
    },
  ]);

  return routes;
};
