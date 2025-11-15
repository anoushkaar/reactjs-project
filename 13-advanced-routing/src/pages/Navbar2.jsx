import { useNavigate } from "react-router";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="py-3 px-5 bg-pink-50">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to HomePage
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
