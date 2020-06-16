import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import App from './components/App';
import CreateSong from './components/CreateSong';
import SongDetails from './components/SongDetails';
import './style/style.css';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <div className="container">
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="new/song" component={CreateSong} />
          <Route path="songs/:id" component={SongDetails} />
        </Route>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
