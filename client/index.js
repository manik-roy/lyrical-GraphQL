import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider store={client}>
    <div className="container center">
      <h2>Lyrical Music</h2>
    </div>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
