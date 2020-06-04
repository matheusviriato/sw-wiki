import gql from 'graphql-tag';

export const GET_ALL_PERSONS = gql`
  {
    allPersons {
      name
      id
      films {
        title
      }
    }
  }
`;
