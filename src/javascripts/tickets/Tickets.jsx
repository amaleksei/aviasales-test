import React from 'react';
import { uniqueId } from 'lodash';

const flightDetail = (item, value) => {
  const vdom = value === 'departure' ? [
    <h2 key={uniqueId()}>{item.departure_time}</h2>,
    <span key={uniqueId()}>{item.origin}, {item.origin_name}</span>,
    <p key={uniqueId()}>{item.departure_date}</p>,
    <h1 key={uniqueId()}>{item.price}</h1>,
  ] : [
    <h2>{item.arrival_time}</h2>,
    <span>{item.destination}, {item.destination_name}</span>,
    <p>{item.arrival_date}</p>,
    <h1 key={uniqueId()}>{item.price}</h1>,
  ];

  return (
    <div>
      {vdom}
    </div>
  );
};

// [item.stops === thi]

// class FilterOptions extends React.Component {
//   render() {
//     return {this.props.items.map(number => <Item value={number} />)};
//   }
// }
//
// class Item extends React.Component {
//   render() {
//     return item.stops === {this.props.value};
//   }
// }

// {data.filter(item => {FilterOptions items={[1]}}).map(item => <div key={uniqueId()}>{flightDetail(item, 'departure')}</div>)}

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