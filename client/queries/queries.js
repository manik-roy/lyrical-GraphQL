import gql from 'graphql-tag';

export const fetchQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;
