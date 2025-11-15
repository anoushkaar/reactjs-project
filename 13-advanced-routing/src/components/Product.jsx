import { Link, Outlet } from "react-router";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link className="text-xl font-light" to="/product/men">
          Men's
        </Link>
        <Link className="text-xl font-light" to="/product/women">
          Women's
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
