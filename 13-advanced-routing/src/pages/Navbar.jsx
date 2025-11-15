import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex py-4 items-center px-8 bg-pink-200 justify-between">
      <h2 className="text-2xl font-semibold">Pearl</h2>
      <div className="flex gap-10"> 
        <Link className="text-lg font-extralight" to="/">
          Home
        </Link>
        <Link className="text-lg font-extralight" to="/about">
          About
        </Link>
        <Link className="text-lg font-extralight" to="/courses">
          Courses
        </Link>
        <Link className="text-lg font-extralight" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
