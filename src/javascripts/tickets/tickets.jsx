import React from 'react';
import { uniqueId } from 'lodash';

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

class Tickets extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map(item => <div key={uniqueId()}>{flightDetail(item, 'departure')}</div>)}
      </div>
    );
  }
}

export default Tickets;
