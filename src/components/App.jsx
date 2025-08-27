import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ItemModal from "./ItemModal";

import { defaultClothingItems } from "../utils/defaultClothingItems";

function App() {
  //Save as state (useState)
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");

  function handleOpenItemModal() {
    setActiveModal("item-modal");
    console.log(activeModal);
  }

  return (
    <div className="app">
      <Header />
      <Main clothingItems={clothingItems} handleOpenItemModal={handleOpenItemModal} />
      <Footer />
      {/*<ModalWithForm />*/}
      <ItemModal card={{ name: "asdf" }} isOpen={activeModal === "item-modal"} />
    </div>
  );
}

export default App;
