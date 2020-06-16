import gql from 'graphql-tag';

export const fetchQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const getSong = gql`
  query getSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        content
        id
        likes
      }
    }
  }
`;
