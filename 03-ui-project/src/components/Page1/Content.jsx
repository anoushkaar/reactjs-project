import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = (props) => {
  return (
    <div className="py-10 h-[90vh]  px-18 flex justify-between items-center gap-10">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Content;
