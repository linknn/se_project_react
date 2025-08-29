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
  const [selectedCard, setSelectedCard] = useState({});

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleCloseItemModal() {
    setActiveModal("");
    setSelectedCard({});
  }

  return (
    <div className="app">
      <Header />
      <Main clothingItems={clothingItems} handleOpenItemModal={handleOpenItemModal} />
      <Footer />
      {/*<ModalWithForm />*/}
      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        onClose={handleCloseItemModal}
      />
    </div>
  );
}

export default App;
