/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AppContainer from './src/navigation/index';
import {Provider} from 'react-redux';
import store from './src/reducer/store';
const client = new ApolloClient({
  uri: 'http://172.16.1.16:4000/shop/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppContainer/>
      </ApolloProvider>
    </Provider>
    );
  };
export default App;
