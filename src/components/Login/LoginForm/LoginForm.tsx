// DEPENDENCIES
import { memo } from "react";

// COMPONENTS
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";

// INTERFACES
import { ILoginUser } from "../../../interfaces/ILoginUser";

// STYLED
import { FormContainer } from "./styles";
import { ILoginErrors } from "../Login";

interface IProps {
  user: ILoginUser;
  handleChange(event: any): void;
  errors: ILoginErrors;
  handleClick(event: any): void;
}

const LoginForm = memo<IProps>(
  ({ user, handleChange, errors, handleClick }) => {
    return (
      <FormContainer>
        <div>
          {/* <img src={logo} alt="laliga2" /> */}
          <h2>Inicia Sesión</h2>
          <Input
            type="email"
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="test@test.com"
            disabled={false}
          />
          <Input
            name="password"
            label="Contraseña"
            type="password"
            value={user.password}
            placeholder=""
            onChange={handleChange}
            error={errors.password}
            disabled={false}
          />
          <Button
            color="primary"
            size="large"
            outline={false}
            onClick={handleClick}
          >
            Iniciar Sesión
          </Button>
        </div>
      </FormContainer>
    );
  }
);

export { LoginForm };
