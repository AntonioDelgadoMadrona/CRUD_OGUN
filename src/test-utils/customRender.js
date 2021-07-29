// DEPENDENCIES
import React from 'react';
import { render as rtlRender } from '@testing-library/react';

// CONFIG
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (ui, { initialState = {}, ...renderOptions } = {}) => {

  const store = configureStore(initialState, createBrowserHistory());

  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <Router>
          {children}
        </Router>
      </Provider>
    )
  };

  const rendered = rtlRender(ui, { wrapper: Wrapper, ...renderOptions });

  return {
    ...rendered,
    rerender: (ui, options, debugMode) => render(ui, { container: rendered.container, ...options }, debugMode)
  }
};

// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/jest-dom/extend-expect';

// override render method
export { render }