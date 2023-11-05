import { Routes, Route, useLocation } from "react-router-dom";

const MenuRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route></Route>
    </Routes>
  );
};

export default MenuRoutes;
