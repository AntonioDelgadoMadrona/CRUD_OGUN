// DEPENDENCIES
import { memo, useEffect } from "react";
import { ToastContainer, toast as customToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// TYPES
import { IToast } from "../../../interfaces/IToast";

// STYLED
import { Container } from "./styled";

interface IProps {
  toast: IToast;
}

const Toast = memo<IProps>(({ toast }) => {
  useEffect(() => {
    customToast(toast.message, {
      position: "top-right",
      hideProgressBar: false,
      autoClose: 3000,
      type: customToast.TYPE[toast.type],
      pauseOnHover: true,
      closeOnClick: true,
      pauseOnFocusLoss: true,
    });
  }, [toast]);

  return (
    <Container>
      <ToastContainer />
    </Container>
  );
});

export { Toast };
