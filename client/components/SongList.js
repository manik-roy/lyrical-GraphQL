/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import SongItem from './SongItem';
import { fetchQuery } from '../queries/queries';

class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) return <h2 className="center">loading</h2>;
    return (
      <div className="lyrics-container">
        <ul className="collection">
          {this.props.data.songs.map(song => (
            <SongItem song={song} key={song.id} />
          ))}
        </ul>
        <Link
          to="/new/song"
          className="btn-floating btn-large red right fixed"
          style={{ position: 'fixed', top: '30px', right: '15%' }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(fetchQuery)(SongList);
