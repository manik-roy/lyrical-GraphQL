/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import SongItem from './SongItem';

import { fetchQuery } from '../queries/queries';

class SongList extends Component {
  deleteHandler(id) {
    const { mutate } = this.props;
    mutate({
      variables: {
        id,
      },
    }).then(() => this.props.data.refetch());
  }

  render() {
    if (this.props.data.loading) return <h4 className="center">loading</h4>;
    return (
      <div className="lyrics-container">
        <ul className="collection">
          {this.props.data.songs.map(song => (
            <SongItem song={song} key={song.id} deleteHandler={this.deleteHandler.bind(this)} />
          ))}
        </ul>
        <Link to="/new/song" className="btn-floating btn-large red right fixed add-song">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(fetchQuery)(SongList));
