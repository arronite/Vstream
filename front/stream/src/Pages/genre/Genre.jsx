import { Explore } from "../home/components/Explore";
import { useParams } from "react-router-dom";

export const Genre = () => {
  const { id } = useParams();

  return (
    <div>
      <Explore id={id} />
    </div>
  );
};
