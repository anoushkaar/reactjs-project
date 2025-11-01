const Card = (props) => {
  // console.log(props.user, props.age);

  return (
    <div className="parent">
      <div className="card">
        <img src={props.img} alt="" />
        <h1>
          {props.user} {props.age}
        </h1>
        <p>{props.bio}</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};
export default Card;
