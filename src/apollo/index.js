import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const URL = process.env.REACT_APP_SERVER_URL;

const httplink = new HttpLink({
  uri: URL,
  headers: {},
});

const client = new ApolloClient({
  uri: 'http://192.168.43.225:4000/shop/graphql',
  cache: new InMemoryCache(),
});

export default client;
