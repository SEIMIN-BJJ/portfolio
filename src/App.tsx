import { BrowserRouter } from "react-router-dom";
import MenuRoutes from "./routes/MenuRoutes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MenuRoutes />
    </BrowserRouter>
  );
};

export default App;
