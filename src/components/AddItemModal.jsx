import { useForm } from "../hooks/useForm";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ isOpen, onClose }) {
  const { values, handleChange } = useForm({ name: "", weather: "hot" });

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      buttonText="Add garment"
      name="add-clothes-form"
      onClose={onClose}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="add-clothes-name" className="modal__label">
          Name
          <input
            id="add-clothes-name"
            type="text"
            className="modal__input"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label className="modal__label">
          Image
          <input type="url" className="modal__input" placeholder="Image URL" name="image" />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <legend className="modal__form-legend">Select the weather type:</legend>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          <label className="modal__label modal__label_type_radio" htmlFor="hot">
            Hot
          </label>
        </div>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="warm"
            name="weather"
            checked={values.weather === "warm"}
            onChange={handleChange}
            value="warm"
          />
          <label className="modal__label modal__label_type_radio" htmlFor="warm">
            Warm
          </label>
        </div>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="cold"
            name="weather"
            checked={values.weather === "cold"}
            onChange={handleChange}
            value="cold"
          />
          <label className="modal__label modal__label_type_radio" htmlFor="cold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
