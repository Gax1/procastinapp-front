import { Header } from "../../components/Header/Header";
import { NotFoundPageStyled } from "./NotFoundPageStyled";

export const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <NotFoundPageStyled>
        <div className="text-container">
          <h2 className="main-title-notFoundPage">404 PAGE NOT FOUND</h2>
          <span className="text-notFound-page">
            Opss something went wrong...
          </span>
          <span className="text-notFound-page">Try again please!</span>
        </div>
      </NotFoundPageStyled>
    </>
  );
};
