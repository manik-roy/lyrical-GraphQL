/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { getSong } from '../queries/queries';
import CreateLyrics from './CreateLyrics';
import LyricsIt from './LyricsList';

class SongDetails extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <h4 className="center">Loading</h4>;
    }
    return (
      <div>
        <Link to="/" className="btn">
          Back
        </Link>
        <h2>{song.title}</h2>
        <div className="lyrics-container">
          <LyricsIt lyrics={song.lyrics} />
        </div>
        <div>
          <CreateLyrics id={this.props.params.id} />
        </div>
      </div>
    );
  }
}

export default graphql(getSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetails);
