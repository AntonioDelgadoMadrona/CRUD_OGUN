// DEPENDENCIES
import React from "react";

// COMPONENTS
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";

// STYLED
import { FormContainer } from "./styles";

interface IProps {
  user: any;
  handleChange: Function;
  errors: any;
  handleClick: any;
}

const LoginForm = React.memo<IProps>(
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
            placeholder="charles.morris@reqres.in"
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
