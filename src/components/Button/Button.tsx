import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
}

export const Button = ({ buttonText }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="submit-button" type="submit">
      {buttonText}
    </ButtonStyled>
  );
};
