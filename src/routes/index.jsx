import { Route, Routes } from "react-router-dom";
import LPWelcome from "../pages/LandingPage";
import DogHome from "../pages/DogHome";
import CatHome from "../pages/CatHome";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LPWelcome />} />
      <Route path="/agedog" element={<DogHome />} />
      <Route path="/agecat" element={<CatHome />} />
    </Routes>
  );
};
export default Routers;
