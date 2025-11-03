import Content from "./Content";
import Navbar from "./Navbar";

const Page1 = (props) => {
  return (
    <div className="bg-white text-black h-screen w-full">
      <Navbar />
      <Content users={props.users} />
    </div>
  );
};

export default Page1;
