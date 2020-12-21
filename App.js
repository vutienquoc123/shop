import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AppContainer from './src/navigation/index';
const client = new ApolloClient({
  uri: 'http://172.16.1.16:4000/shop/graphql',
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
        <AppContainer/>
    </ApolloProvider>
    );
  };
export default App;
