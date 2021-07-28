// DEPENDENCIES
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect, RootStateOrAny } from "react-redux";

// COMPONENTS
import Layout from "./Layout/Layout";
import MovieList from "./MovieList/MovieList";
import MovieDetails from "./MovieDetails/MovieDetails";
import Login from "./Login/Login";

// HIGHT ORDER COMPONENT
import { PrivateRoute } from "./hoc/PrivateRoute";

// UTILS
import { history } from "../utils/history";

// STYLE
import "./App.css";

export interface IProps {
  logged: boolean;
};

const App: React.FC<IProps> = ({ logged }) => (
  <div data-testid="app-component">
    <Router history={history}>
      <Layout>
        <Switch>
          {!logged && <Route exact path="/Login" component={Login} />}
          <PrivateRoute
            exact
            path="/Movie"
            component={MovieDetails}
            logged={logged}
          />
          <PrivateRoute
            exact
            path="/Movies"
            component={MovieList}
            logged={logged}
          />
          <Redirect to={logged ? "/Movies" : "/Login"} />
        </Switch>
      </Layout>
    </Router>
  </div>
);

const mapState = (state: RootStateOrAny) => {
  const { authReducer } = state;
  return {
    logged: authReducer.logged,
  };
};

export { App };

export default connect(mapState)(App);