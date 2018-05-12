import React from 'react';
import { uniqueId } from 'lodash';

class Filter extends React.Component {
  renderItem(item) {
    const isOnClick = (item) => {
      if (item.stops === 'all') {
        const value = this.props.isAllSelec;
        return value;
      }
      return null;
    };

    const controlParameters = {
      onChange: this.props.handleChange,
      onClick: isOnClick(item),
    };

    const result = <div key={uniqueId()} className="filter__checkbox-item checkbox-item"><span className="checkbox-item__checkbox"><input name={item.stops} className="checkbox-item__checkbox-field" {...controlParameters} checked={item.states} type="checkbox" /><label className="checkbox-item__label">{item.name}</label></span></div>;
    return result;
  }

  render() {
    const data = [{
      states: this.props.all,
      stops: "all",
      name: "Все",
    },{
      states: this.props.noStops,
      stops: "noStops",
      name: "Без пересадок",
    }, {
      states: this.props.oneStops,
      stops: "oneStops",
      name: "1 пересадка",
    }, {
      states: this.props.twoStops,
      stops: "twoStops",
      name: "2 пересадки",
    }, {
      states: this.props.threeStops,
      stops: "threeStops",
      name: "3 пересадки",
    }];

    const handleChange = this.props;
    const isAllSelec = this.props;
    return (
      <div className="filter">
        <div className="filter__header">Количество пересадок</div>
        <div className="filter__content">
          {data.map((item) => this.renderItem(item))}
        </div>
      </div>
    );
  }
}

export default Filter;
