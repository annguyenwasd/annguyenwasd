import React from 'react';
import { Provider } from 'react-redux';
import Layout from 'components/layout';
import store from 'store';

function App({ children }) {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  );
}

App.propTypes = {};

App.defaultProps = {};

export default App;
