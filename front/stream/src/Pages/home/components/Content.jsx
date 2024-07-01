import { Cards } from "./Cards";

export const Content = ({ id }) => {
  return (
    <>
      <div className="flex w-4/5">
        <div className="w-full">
          <div className=" glass px-4 py-5 w-full  rounded-bl-2xl">
            <span className="text-3xl font-bold text-cyan-100">EXPLORE</span>
          </div>
          <Cards id={id} />
        </div>
      </div>
    </>
  );
};
