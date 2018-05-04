import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

const createReactClass = require('create-react-class');

const FlightDetails = createReactClass({
  render() {

  },
});


const Tickets = createReactClass({
  render() {
    const { data } = this.props;

    // const test =

    const airportOrigin = <p>{item.destination}</p>;
    return (
      <div>
        <p>Helll</p>
        <div>
          {data.map((item) =>
            <div key={`ticket-${uniqueId()}`}>
              <p>{item.departure_time}</p>
              <p>{item.origin}</p>
              <p>{item.departure_date}</p>
            </div>
          )
          }
        </div>
      </div>
    );
  },
});

export default Tickets;
