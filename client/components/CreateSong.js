/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import { fetchQuery } from '../queries/queries';

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  submitHandler(e) {
    e.preventDefault();

    const { mutate } = this.props;
    const { title } = this.state;
    mutate({
      variables: {
        title,
      },
      refetchQueries: [{ query: fetchQuery }],
    }).then(() => hashHistory.push('/'));
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Link to="/" className="btn">
          Back
        </Link>
        <h2>Crete Song</h2>
        <form onSubmit={this.submitHandler.bind(this)}>
          <label>Song Title</label>
          <input onChange={event => this.setState({ title: event.target.value })} type="text" value={title} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
export default graphql(mutation)(CreateSong);
