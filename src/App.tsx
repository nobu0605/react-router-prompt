import { useRoutes } from "./router/useRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  const routes = useRoutes();

  return <RouterProvider router={routes} />;
}

export default App;
