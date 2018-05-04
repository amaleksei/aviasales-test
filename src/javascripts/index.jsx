import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import dataJSON from './tickets/tickets.json';
import Tickets from './tickets/tickets.jsx';

const dataSorted = dataJSON.tickets.sort((a, b) => a.price - b.price);

const createReactClass = require('create-react-class');

const flightDetail = (item, value) => {
  const vdom = value === 'departure' ? [
    <h2 key={uniqueId()}>{item.departure_time}</h2>,
    <span key={uniqueId()}>{item.origin}, {item.origin_name}</span>,
    <p key={uniqueId()}>{item.departure_date}</p>,
  ] : [
    <h2>{item.arrival_time}</h2>,
    <span>{item.destination}, {item.destination_name}</span>,
    <p>{item.arrival_date}</p>,
  ];

  return (
    <div>
      {vdom}
    </div>
  );
};

const Hello = createReactClass({
  render() {
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
        </div>
        <div className="Tickets">
          {dataSorted.map(item => <div key={uniqueId()}>{flightDetail(item, 'departure')}</div>)}
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Hello />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
