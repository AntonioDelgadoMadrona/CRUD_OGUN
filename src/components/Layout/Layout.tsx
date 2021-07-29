// DEPENDENCIES
import React from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

// COMPONENTS
import { Navbar } from "../Navbar/Navbar";
import { Toast } from "../common/Toast/Toast";

// INTERFACES
import { IMovieDetails } from "../../interfaces/IMovieDetails";
import { IToast } from "../../interfaces/IToast";

// STYLES
import { Layout as Container, Wrapper } from "./styles";

interface IProps {
  logged?: boolean;
  toast: IToast;
  email: string;
  logoutAction(): void;
  favMovieList: IMovieDetails[]
}

const Layout = React.memo<IProps>(
  ({
    logged,
    toast,
    email,
    children,
    logoutAction,
    favMovieList,
  }) => {
    const { pathname } = useLocation();

    return (
      <Container>
        {logged && (
          <Navbar
            logged={logged}
            email={email}
            logoutAction={logoutAction}
            hasFav={favMovieList?.length > 0}
          />
        )}
        {toast && <Toast toast={toast} />}
        <Wrapper path={pathname}>{children}</Wrapper>
      </Container>
    );
  }
);

const mapStateToProps = (state: RootStateOrAny) => {
  const { authReducer, movieReducer, alertReducer } = state;
  return {
    logged: authReducer.logged,
    email: authReducer.email,
    toast: alertReducer.toast,
    favMovieList: movieReducer.favMovieList,
  };
};

const mapDispatchToProps = {
  logoutAction,
};

export { Layout };

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default LayoutContainer;
