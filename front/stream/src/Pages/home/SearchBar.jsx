import { Container } from "../../Components/general/Container";
import axios from "axios";
import logo from "/search.svg";
import { useState } from "react";
import { useRef } from "react";

export const SearchBar = ({ setModal, result, setResult }) => {
  const [timeoutId, setTimeoutId] = useState(null);
  const textRef = useRef();

  const search = (e) => {
    if (e.key == "Enter") {
      const query = textRef.current.value;
      axios
        .get(`http://localhost:5892/films/search/${query}`)
        .then((response) => setResult(response))
        .then(() => setModal(true));
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      axios
        .get(`http://localhost:5892/films/search/${query}`)
        .then((response) => setResult(response));

      setModal(true);
    }, 2000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <Container>
      <div className="flex items-center h-10 inputField">
        <input
          ref={textRef}
          onChange={handleSearch}
          onKeyDown={search}
          className="flex-grow p-2 text-white border-none outline-none"
          placeholder="Search"
          type="text"
          id="search"
          name="search"
        />
      </div>
    </Container>
  );
};
