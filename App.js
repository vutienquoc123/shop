/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import AppContainer from './src/navigation/index';
import {Provider} from 'react-redux';
import store from './src/reducer/store';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// const client = new ApolloClient({
//   uri: 'http://192.168.1.4:4000/shop/graphql',
//   cache: new InMemoryCache(),
// });
import client from './src/apollo/index';
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
