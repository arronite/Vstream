import { Explore } from "./components/Explore";
import CustomSwiper from "./components/CustomSwiper";
import { swiperImages } from "./swiperImages";
import { SearchBar } from "./SearchBar";
import Modal from "../../Components/general/Modal";
import { useState, useEffect } from "react";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure the body overflow is reset when component unmounts or modal state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <div>
      <Modal
        visible={modal}
        setVisibility={setModal}
        {...{ result, setResult }}
      />
      <CustomSwiper images={swiperImages} />
      <SearchBar {...{ setModal, result, setResult }} />
      <Explore />
    </div>
  );
};
export default Home;
