// DEPENDENCIES
import React from "react";
import { render, screen } from "../test-utils/customRender";
import { history } from '../utils/history';

// COMPONENTS
import { App } from "./App";

const props = {
  logged: false,
  favMovieList: [],
};

test('render without errors', async () => {
  render(<App {...props} />);
  expect(await screen.findByTestId('app-component')).toBeTruthy();
});

describe('checks the routes when the user is NOT logged`', () => {

  test('should render the login if logged is false', async () => {
    render(<App {...props} />);
    history.push("/login");
    expect(await screen.findByText('Todas las películas y series que desees, y mucho más.')).toBeTruthy();
  });

  test('should not render the others routes if logged is false', async () => {
    render(<App {...props} />);
    history.push("/Movie?id=2");
    expect(screen.queryByText('Añadir a favoritos')).toBeNull();

    history.push("/Movies");
    expect(screen.queryByText('Las más populares')).toBeNull();
  });

});

describe('checks the routes when the user is logged`', () => {

  test('should not render the login if logged is true', async () => {
    render(<App {...props} logged={true} />);
    history.push("/login");
    expect(screen.queryByText('Todas las películas y series que desees, y mucho más.')).toBeNull();
  });

  test('should render the others routes if logged is true', async () => {
    render(<App {...props} logged={true} />);
    history.push("/Movie?id=2");
    expect(await screen.findByText('Añadir a favoritos')).toBeTruthy();

    history.push("/movies");
    expect(await screen.findByText('Las más populares')).toBeTruthy();
  });

});