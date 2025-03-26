import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-day-picker/style.css";
import router from "./Router/Route/Route";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}
export default App;
