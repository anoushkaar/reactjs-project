import { Route, Routes } from "react-router";
import About from "./components/About";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Product from "./components/Product";
import CourseDetails from "./pages/CourseDetails";
import Footer from "./pages/Footer";
import Men from "./pages/Men";
import Navbar from "./pages/Navbar";
import Navbar2 from "./pages/Navbar2";
import NotFound from "./pages/NotFound";
import Women from "./pages/Women";

const App = () => {
  return (
    <div className="bg-white text-black h-screen">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
