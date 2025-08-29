import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import About from "../pages/about/About";
import Reviews from "../pages/reviews/Reviews";
import Courses from "../pages/courses/Courses";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
};

export default UserRouter;
