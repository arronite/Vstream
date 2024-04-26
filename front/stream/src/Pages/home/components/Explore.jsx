import { Container } from "../../../Components/general/Container";
import { Content } from "./Content";
import { Genre } from "./Genre";
export const Explore = () => {
  return (
    <Container>
      <div className="flex gap-28">
        <Genre />
        <Content />
      </div>
    </Container>
  );
};
