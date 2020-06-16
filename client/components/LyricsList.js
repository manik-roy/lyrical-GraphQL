/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricsIt extends Component {
  addLikes(id, likes) {
    this.props.mutate({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          likes: likes + 1,
          __typename: 'LyricType',
        },
      },
    });
  }

  renderLyricsList() {
    return this.props.lyrics.map(lyric => (
      <div className="collection-item" key={lyric.id}>
        <li>{lyric.content}</li>
        <div className="likes-container">
          <span onClick={() => this.addLikes(lyric.id, lyric.likes)}>
            {' '}
            <i className="material-icons">thumb_up</i>
          </span>
          {lyric.likes}
        </div>
      </div>
    ));
  }

  render() {
    return <div className="collection">{this.renderLyricsList()}</div>;
  }
}
const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
export default graphql(mutation)(LyricsIt);
