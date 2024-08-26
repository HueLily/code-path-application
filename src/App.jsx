import { useRoutes } from "react-router-dom";
import "./App.css";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreator from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
function App() {
  let routes = useRoutes([
    { path: "/", element: <ShowCreator/> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/creator/:id/edit", element: <EditCreator /> },
    { path: "/new", element: <AddCreator /> },
  ]);
  return (
    <div className="app-container">
      {routes}
    </div>
  );
}

export default App;
