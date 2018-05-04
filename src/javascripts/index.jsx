import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import data from './tickets/tickets.json';

const createReactClass = require('create-react-class');

const Hello = createReactClass({
  render() {
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
        </div>
        <div className="description">
          <span>Boilerplate for a Webpack and React</span>
        </div>
        <div className="image-insert">
          <img alt="Hard programming" src="./assets/images/test-image.gif" />
        </div>
        <Tickets />
      </div>
    );
  },
});

const Tickets = createReactClass({
  render() {
    return (
      <ul>
        {data.tickets.map(item => <li key={uniqueId()}>{item.price}</li>)}
      </ul>
    );
  },
});

ReactDOM.render(<Hello />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
