/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router';

const SongItem = ({ song, deleteHandler }) => (
  <div className="collection-item">
    <li>
      <Link to={`/songs/${song.id}`}>{song.title}</Link>
    </li>
    <span onClick={() => deleteHandler(song.id)}>
      <i className="material-icons">delete</i>
    </span>
  </div>
);

export default SongItem;
