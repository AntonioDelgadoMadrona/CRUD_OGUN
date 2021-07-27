// DEPENDENCIES
import { memo } from "react";
import { Redirect, Route } from "react-router-dom";

interface IProps {
  component: any;
  logged: any;
  path: string;
  exact: boolean;
}

const PrivateRoute = memo<IProps>(
  ({ component: Component, logged, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          logged ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/Login" }} />
          )
        }
      ></Route>
    );
  }
);

export { PrivateRoute };
