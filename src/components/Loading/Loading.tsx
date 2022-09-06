import { LoadingStyled } from "./LoadingStyled";

export const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <span className="loader" data-testid="loader-container"></span>;
    </LoadingStyled>
  );
};
