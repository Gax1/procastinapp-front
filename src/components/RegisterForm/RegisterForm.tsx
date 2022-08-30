const RegisterForm = (): JSX.Element => {
  return (
    <div className="register-container">
      <form className="form form-register">
        <input
          type="text"
          className="form-input register-input"
          placeholder="here goes youre name..."
        />
        <input
          type="text"
          className="form-input register-input"
          placeholder="here goes youre password..."
        />
        <input
          type="text"
          className="form-input register-input"
          placeholder="youre password again"
        />
        <input
          type="file"
          className="form-input register-input__select-image"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
