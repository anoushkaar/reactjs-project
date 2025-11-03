import { MoveUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <div className="p-5">
        <h3 className="leading-[1.1] mb-7 text-4xl font-bold text-black">
          Prospective <br />
          <span className="text-gray-400">customer</span> <br />
          Segmentation
        </h3>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          possimus laudantium aliquam dolorem debitis dolores maxime expedita
          deleniti ex? Molestias.
        </p>
      </div>
      <div>
        <MoveUpRight size={40} />
      </div>
    </div>
  );
};

export default LeftContent;
