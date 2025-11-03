import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props);

  return (
    <div className="h-full flex rounded-4xl flex-nowrap gap-10  w-2/3 p-4">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContent;
