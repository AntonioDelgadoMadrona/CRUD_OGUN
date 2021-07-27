// DEPENDENCIES
import React, { memo } from "react";
import { useLocation } from "react-router-dom";

// REDUX
// import { connect } from "react-redux";
// import { logoutAction } from "../../redux/actions/authActions/authActions";

// COMPONENTS
// import { Navbar } from "../Navbar/Navbar";
// import { FullScreenSpinner } from "../generic/FullScreenSpinner/FullScreenSpinner";
// import { Toast } from "../generic/Toast/Toast";

// STYLED
import { Layout as Container, Wrapper } from "./styles";
// import { IToast } from "../../interfaces/IToast";

// interface IProps {
//     isLoading: boolean;
//     logged: boolean;
//     // toast: IToast;
//     email: string;
//     logoutAction: any;
// }

const Layout = memo((props) => {
    const { pathname } = useLocation();

    // FIX THE BODY FOR NOT SCROLL
    // if (isLoading)
    //     document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    // else document.getElementsByTagName("body")[0].style.overflow = "auto";

    return (
        <Container>
            {/* {logged && (
                    <Navbar logged={logged} email={email} logoutAction={logoutAction} />
                )}
                {isLoading && <FullScreenSpinner />}
                {toast && <Toast toast={toast} />} */}
            BEFORE WRAPPER
            <Wrapper path={pathname}>{props.children}</Wrapper>
            AFTER WRAPPER
        </Container>
    );
}
);

// const mapState = (state: any) => {
//     const { authReducer, apiStatusReducer, alertReducer } = state;
//     return {
//         logged: authReducer.logged,
//         email: authReducer.email,
//         isLoading: apiStatusReducer > 0,
//         toast: alertReducer.toast,
//     };
// };

// const mapDispatch = {
//     logoutAction,
// };

export { Layout };

// const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default Layout;