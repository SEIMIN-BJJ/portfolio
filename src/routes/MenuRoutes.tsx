import { Routes, Route, useLocation } from "react-router-dom";
import MainSection from "component/pages/MainSection";
const MenuRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainSection />}></Route>
    </Routes>
  );
};

export default MenuRoutes;
