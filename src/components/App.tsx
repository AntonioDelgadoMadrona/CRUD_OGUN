// DEPENDENCIES
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect, RootStateOrAny } from "react-redux";

// COMPONENTS
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import MovieList from "./MovieList/MovieList";
import MovieDetails from "./MovieDetails/MovieDetails";
import FavMovieList from "./FavMovieList/FavMovieList";

// HIGHT ORDER COMPONENT
import { PrivateRoute } from "./hoc/PrivateRoute";

// UTILS
import { history } from "../utils/history";

// INTERFACES
import { IMovieDetails } from "../interfaces/IMovieDetails";

// STYLE
import "./App.css";

export interface IProps {
  logged: boolean;
  favMovieList: IMovieDetails[];
}

const App: React.FC<IProps> = ({ logged, favMovieList }) => (
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
          {favMovieList?.length > 0 && (
            <PrivateRoute
              exact
              path="/FavMovieList"
              component={FavMovieList}
              logged={logged}
            />
          )}
          <Redirect to={logged ? "/Movies" : "/Login"} />
        </Switch>
      </Layout>
    </Router>
  </div>
);

const mapState = (state: RootStateOrAny) => {
  const { authReducer, movieReducer } = state;
  return {
    logged: authReducer.logged,
    favMovieList: movieReducer.favMovieList,
  };
};

export { App };

export default connect(mapState)(App);
