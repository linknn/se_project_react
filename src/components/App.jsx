import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import ModalWithForm from "./ModalWithForm";

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

  function handleOpenClothesModal() {
    setActiveModal("add-clothes-modal");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  return (
    <div className="app">
      <Header handleOpenClothesModal={handleOpenClothesModal} />
      <Main clothingItems={clothingItems} handleOpenItemModal={handleOpenItemModal} />
      <Footer />
      <ModalWithForm
        isOpen={activeModal === "add-clothes-modal"}
        title="New garment"
        buttonText="Add garment"
        name="add-clothes-form"
        onClose={handleCloseModal}
      >
        <fieldset className="modal__fieldset">
          <label htmlFor="add-clothes-name" className="modal__label">
            Name
            <input id="add-clothes-name" type="text" className="modal__input" />
          </label>
          <label className="modal__label">
            Image
            <input type="url" className="modal__input" />
          </label>
        </fieldset>
        <fieldset className="modal__fieldset">
          <legend>Select the weather type:</legend>

          <div>
            <input className="modal__radio-btn" type="radio" id="hot" name="weather" value="hot" />
            <label className="modal__label" htmlFor="hot">
              Hot
            </label>
          </div>

          <div>
            <input
              className="modal__radio-btn"
              type="radio"
              id="warm"
              name="weather"
              value="warm"
            />
            <label className="modal__label" htmlFor="warm">
              Warm
            </label>
          </div>

          <div>
            <input
              className="modal__radio-btn"
              type="radio"
              id="cold"
              name="weather"
              value="cold"
            />
            <label className="modal__label" htmlFor="cold">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
