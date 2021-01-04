import {InMemoryCache} from '@apollo/client';
import {ApolloClient} from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
const URL = process.env.REACT_APP_SERVER_URL;

const client = new ApolloClient({
  link : new HttpLink({
    uri: 'http://172.16.2.64:4000/shop/graphql'
  }),
  cache: new InMemoryCache(),
});

export default client;
