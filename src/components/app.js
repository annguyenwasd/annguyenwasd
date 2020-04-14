import Layout from 'components/layout';
import React from 'react';
import { Provider } from 'react-redux';
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
