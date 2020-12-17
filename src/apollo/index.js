import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const URL = process.env.REACT_APP_SERVER_URL;

const httplink = new HttpLink({
    uri : URL,
    headers:{},
});

const client = new ApolloClient({
    link: httplink,
    cache
})


export default client;

