import { Routes, Route, useLocation } from "react-router-dom";
import MainSection from "component/pages/MainSection";
import SecondSection from "component/pages/SecondSection";
import ThirdSection from "component/pages/ThirdSection";

const MenuRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainSection />}></Route>
      <Route path="/" element={<SecondSection />}></Route>
      <Route path="/" element={<ThirdSection />}></Route>
    </Routes>
  );
};

export default MenuRoutes;
