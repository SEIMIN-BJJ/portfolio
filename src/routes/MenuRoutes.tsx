import { Routes, Route, useLocation } from "react-router-dom";
import MainSection from "component/pages/MainSection";
import SecondSection from "component/pages/SecondSection";
import ThirdSection from "component/pages/ThirdSection";
import SoundNovelDevelopGuide from "component/block/Guide/SoundNovelDevelopGuide";
import RockFestaDevelopGuide from "component/block/Guide/RockFestaDevelopGuide";

const MenuRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainSection />}></Route>
      <Route path="/" element={<SecondSection />}></Route>
      <Route path="/" element={<ThirdSection />}></Route>
      <Route path="/sn-develop" element={<SoundNovelDevelopGuide />}></Route>
      <Route path="/rock-develop" element={<RockFestaDevelopGuide />}></Route>
    </Routes>
  );
};

export default MenuRoutes;
