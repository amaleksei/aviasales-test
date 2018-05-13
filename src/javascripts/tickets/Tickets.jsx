import React from 'react';
import { uniqueId } from 'lodash';

class FlightDetail extends React.Component {
  render() {
    const item = this.props.item;
    const detailsPlace = (value) => {
      if (value === 'departure') {
        return [
          <div key={uniqueId()} className="ticket__detail-left">
            <h2 className="ticket__time">{item.departure_time}</h2>
            <span className="ticket__city">{item.origin}, {item.origin_name}</span>
            <p className="ticket__date">{item.departure_date}</p>
          </div>,
        ];
      }
      return [
        <div key={uniqueId()} className="ticket__detail-right">
          <h2 className="ticket__time" >{item.arrival_time}</h2>
          <span className="ticket__city">{item.destination_name}, {item.destination}</span>
          <p className="ticket__date">{item.arrival_date}</p>
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

    const segment = <div className="ticket__segment">
      <div className="ticket__label-stops">{labelStops(item.stops)}</div>
      <div className="ticket__segment-route">
        <div className="ticket__path-line">{}</div>
        <span className="ticket__airplane-icon"><img src="/assets/images/airplane-icon.svg" alt="airplane-icon"/></span>
      </div>
    </div>;
    return (
      <div className="ticket__content">
        {detailsPlace('departure')}
        {segment}
        {detailsPlace()}
      </div>
    );
  }
}

class TicketBuy extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="ticket__buy">
        <div className="ticket__airline-logo"><img src={GetAirlineLogo(item.carrier)} alt={item.carrier}/></div>
        <Button price={item.price} />
      </div>
    );
  }
}

const GetAirlineLogo = (carrier) => {
  const srcLogo = `https://pics.avs.io/120/35/${carrier}@2x.png`;
  return srcLogo;
};

class Button extends React.Component {
  render() {
    const price = this.props.price;
    return (
      <button className="ticket__button buy-button">
        <p className="buy-button__text">Купить</p>
        <p className="buy-button__price">за {price} Р</p>
      </button>
    );
  }
}

class Ticket extends React.Component {
  render() {
    const itemData = this.props.itemData;
    return (
      <TicketCard>
        <TicketBuy item={itemData}/>
        <FlightDetail item={itemData} />
      </TicketCard>
    );
  }
}

class TicketCard extends React.Component {
  render() {
    let items = React.Children.map(this.props.children, child => child)
    return items;
  }
}

class Tickets extends React.Component {
  render() {
    const { data } = this.props;
    return (
      data.map(item => <div className="ticket" key={uniqueId()}>{<Ticket itemData={item} />}</div>)
    );
  }
}

export default Tickets;
