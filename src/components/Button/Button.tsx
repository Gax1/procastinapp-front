interface ButtonProps {
  buttonText: string;
}

export const Button = ({ buttonText }: ButtonProps): JSX.Element => {
  return (
    <button className="submit-button" type="submit">
      {buttonText}
    </button>
  );
};
