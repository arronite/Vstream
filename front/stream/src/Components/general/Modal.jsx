import { useState } from "react";
import { SearchBar } from "../../Pages/home/SearchBar";
import { Cards } from "../../Pages/home/components/Cards";

const Modal = ({ visible, setVisibility, result, setResult }) => {
  const [searchData, setSearchData] = useState();

  return (
    visible && (
      <div className="absolute top-0 sticky  w-screen h-svh z-50 glass  overflow-hidden">
        <div
          className="text-slate-50 p-4 text-xl cursor-pointer"
          onClick={() => setVisibility(false)}
        >
          X
        </div>

        <Cards searchData={result} />
      </div>
    )
  );
};

export default Modal;
