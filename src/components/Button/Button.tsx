import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  disabled: boolean;
}

export const Button = ({ buttonText, disabled }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className="submit-button" type="submit" disabled={disabled}>
      {buttonText}
    </ButtonStyled>
  );
};
