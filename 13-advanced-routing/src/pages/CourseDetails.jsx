import { useParams } from "react-router";

const CourseDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>{params.id} CourseDetails</h1>
    </div>
  );
};

export default CourseDetails;
