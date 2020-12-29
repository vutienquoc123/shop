import React from 'react';
import { GET_LOGGED_IN_CUSTOMER } from '../../graphql/query/customer';
import ProfileComponent from './ProfileComponent';
import { useQuery,gql,useMutation } from '@apollo/client';
export default function Profile({ navigation}) {
   const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
   if (loading) return null;
   if (error) return `Error! ${error}`;
   return (
      <ProfileComponent data={data}/>
   ) 
}
