import { Container } from "../../../Components/general/Container";
import { Content } from "./Content";
import { GenrePanel } from "./GenrePanel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Explore = ({ id }) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.to(".aaa", {
      scrollTrigger: {
        trigger: ".test",
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play resume resume reverse",
      },

      opacity: 1,
    });
  });

  return (
    <Container gradient={true}>
      <div className=" test aaa flex justify-between ">
        <GenrePanel />
        <Content id={id} />
      </div>
    </Container>
  );
};
