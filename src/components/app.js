import Layout from 'components/layout';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import store from 'store';

function App({ children }) {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  );
}

App.propTypes = { children: PropTypes.node.isRequired };

App.defaultProps = {};

export default App;
