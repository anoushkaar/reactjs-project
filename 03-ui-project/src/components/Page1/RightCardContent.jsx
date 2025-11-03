import { MoveRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full  p-8 flex flex-col justify-between ">
        <h2 className="bg-white rounded-full h-8 w-8 flex justify-center items-center text-xl font-bold">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-md leading-relaxed mt-60 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deserunt modi iste assumenda qui dignissimos?
          </p>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2  rounded-full">
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
