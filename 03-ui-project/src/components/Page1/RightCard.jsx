import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-70 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  );
};

export default RightCard;
