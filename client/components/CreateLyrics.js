/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class CreateLyrics extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  submitHandler(e) {
    e.preventDefault();

    const { mutate } = this.props;
    const { content } = this.state;
    mutate({
      variables: {
        content,
        songId: this.props.id,
      },
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <h2>Add Lyrics</h2>
        <form onSubmit={this.submitHandler.bind(this)}>
          <label>Lyrics</label>
          <input onChange={event => this.setState({ content: event.target.value })} type="text" value={content} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
        id
        likes
      }
    }
  }
`;
export default graphql(mutation)(CreateLyrics);
