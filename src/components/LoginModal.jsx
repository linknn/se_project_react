import ModalWithForm from "./ModalWithForm";
import { useForm } from "../hooks/useForm";

function LoginModal({ isOpen, onClose, onLogin }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <ModalWithForm
      title="Sign In"
      buttonText="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
