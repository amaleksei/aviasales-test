import React from 'react';
import { uniqueId } from 'lodash';

const flightDetail = (item) => {
  const detailsPlace = (value) => {
    if (value === 'departure') {
      return [
        <div key={uniqueId()}>
          <h2 className="flight-detail__time">{item.departure_time}</h2>
          <span className="flight-detail__city">{item.origin}, {item.origin_name}</span>
          <p className="flight-detail__date">{item.departure_date}</p>
        </div>,
      ];
    }
    return [
      <div key={uniqueId()}>
        <h2 className="flight-detail__time" >{item.arrival_time}</h2>
        <span className="flight-detail__city">{item.destination}, {item.destination_name}</span>
        <p className="flight-detail__date">{item.arrival_date}</p>
      </div>,
    ];
  };

  const labelStops = (stops) => {
    let label;
    if (stops === 0) {
      return;
    } else if (stops === 1) {
      label = 'пересадка';
    } else if (stops > 1 && stops < 5) {
      label = 'пересадки';
    } else {
      label = 'пересадок';
    }
    const result = `${stops} ${label.toUpperCase()}`;

    return result;
  };

  const segment = <div className="flight-detail__segment">
    <div className="flight-detail__label-stops">{labelStops(item.stops)}</div>
    <div className="flight-detail__path-line">{}</div>
  </div>;


  return (
    <div>
      {detailsPlace('departure')}
      {segment}
      {detailsPlace()}
    </div>
  );
};

class Tickets extends React.Component {
  render() {
    const { data } = this.props;

    return (
        <div>
          {data.map(item => <div className="flight-detail" key={uniqueId()}>{flightDetail(item)}</div>)}
        </div>
    );
  }
}

export default Tickets;
