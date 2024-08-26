import { useRoutes } from "react-router-dom";
import "./App.css";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreator from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
// import { supabase } from "./client";
function App() {
  // const [creators, setCreators] = useState([]);

  // useEffect(() => {
  //   const fetchCreators = async () => {
  //     const { data, error } = await supabase
  //       .from('creators')
  //       .select('*');

  //     if (error) {
  //       console.error("Error fetching data: ", error);
  //     } else {
  //       setCreators(data);
  //     }
  //   };

  //   fetchCreators();
  // }, []);
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
