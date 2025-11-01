import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg"
            alt=""
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button type="button">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
