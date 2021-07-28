// DEPENDENCES
import { memo, useState } from "react";

// REDUX
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";

// COMPONENTS
import { LoginForm } from "./LoginForm/LoginForm";

// STYLES AND UTILS
import * as validations from "../../utils/validations";

// IMAGES
import fullImg from "../../images/home background.jpg";
import logo from "../../images/large logo.png";

// STYLED
import {
  LoginContainer as Container,
  StyledImgContainer,
  LogoContainer,
  StyledForm,
} from "./styles";

// TYPES
import { ILoginUser } from "../../interfaces/ILoginUser";

interface IProps {
  loginAction(user: ILoginUser): void;
}

export interface ILoginErrors {
  email?: string;
  password?: string;
}

const Login = memo<IProps>(({ loginAction }) => {
  const initialState: ILoginUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState<ILoginUser>(initialState);
  const [errors, setErrors] = useState<ILoginErrors>({});

  // CHECKS IF THE FORM IS VALID
  const formIsValid = () => {
    const { email, password } = user;
    const errors: ILoginErrors = {};

    if (!email) errors.email = "Introduce un email";
    else if (!validations.validateEmailAddress(email))
      errors.email = "Introduce un email válido";

    if (!password) errors.password = "Introduce una contraseña";
    else if (password.length < 5) errors.password = "Mínimo 5 caracteres";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // CHANGE EVERY PROPERTY BY NAME
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // TRY TO LOG
  const handleClick = () => {
    if (!formIsValid()) return;
    loginAction(user);
  };

  return (
    <Container>
      <StyledImgContainer>
        <img src={fullImg} alt="fullImg" />
        <div>
          <LogoContainer>
            <img src={logo} alt="logoLaLiga" />
          </LogoContainer>
          <h1>Todas las películas y series que desees, y mucho más.</h1>
          <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        </div>
      </StyledImgContainer>

      <StyledForm>
        <LoginForm
          user={user}
          handleChange={handleChange}
          errors={errors}
          handleClick={handleClick}
        />
      </StyledForm>
    </Container>
  );
});

const mapDispatch = {
  loginAction,
};

export { Login };

const LoginContainer = connect(null, mapDispatch)(Login);

export default LoginContainer;
