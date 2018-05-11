import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';
// import headerLogo from './../assets/images/logo.svg';

import dataJSON from './tickets.json';
import Tickets from './tickets/Tickets.jsx';
// import Filter from './Filter.jsx';

const dataSorted = dataJSON.tickets.sort((a, b) => a.price - b.price);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      noStops: true,
      oneStops: true,
      twoStops: false,
      threeStops: false,
      testNumber: 1000,
    };
  }

  noStops = () => {
    return this.state.noStops;
  };

  handleChange = (e) => {
    const name = e.target.name;
    const isAll = this.state.all;
    const isNoStops = this.state.noStops;
    const isOneStops = this.state.oneStops;
    const isTwoStops = this.state.twoStops;
    const isThreeStops = this.state.threeStops;

    const AllStops = [isNoStops, isOneStops, isTwoStops, isThreeStops];
    const AllStopsFilteredCountTrue = AllStops.filter(item => item === true).length;
    const isAllSelected = condition => (AllStopsFilteredCountTrue === 3 ? e.target.checked : false);

    this.setState({
      all: isAllSelected(),
      [name]: e.target.checked,
    });
  }

  isAllSelec = (e) => {
    const isAll = this.state.all;
    const isNoStops = this.state.noStops;
    const isOneStops = this.state.oneStops;
    const isTwoStops = this.state.twoStops;
    const isThreeStops = this.state.threeStops;
    const AllStops = [isNoStops, isOneStops, isTwoStops, isThreeStops];
    const AllStopsFilteredCountTrue = AllStops.filter(item => item === true).length;
    const AllStopsFilteredCount = AllStopsFilteredCountTrue === 3;
    const OneOrMoreStopsFilteredCount = AllStopsFilteredCountTrue >= 1;
    const isAllSelected = condition => (AllStopsFilteredCountTrue === 3 ? e.target.checked : false);

    this.setState({
      all: e.target.checked,
      noStops: e.target.checked,
      oneStops: e.target.checked,
      twoStops: e.target.checked,
      threeStops: e.target.checked,
    });
  }
  render() {
    const isChecked = this.state.all ? 'checked' : 'unchecked';
    const stopsStates = [this.state.noStops, this.state.oneStops, this.state.twoStops, this.state.threeStops];
    const checkboxisAll = (<span><input name="all" type="checkbox" onChange={this.handleChange.bind(this)} onClick={this.isAllSelec.bind(this)} checked={this.state.all} /><label>Все {this.state.all ? 'ON' : 'OFF'}</label></span>);
    const checkboxNoStops = (<span><input name="noStops" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.noStops} /><label>Без пересадок {this.state.noStops ? 'ON' : 'OFF'}</label></span>);
    const checkboxOneStops = (<span><input name="oneStops" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.oneStops} /><label>1 пересадка {this.state.oneStops ? 'ON' : 'OFF'}</label></span>);
    const checkboxTwoStops = (<span><input name="twoStops" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.twoStops} /><label>2 пересадки {this.state.twoStops ? 'ON' : 'OFF'}</label></span>);
    const checkboxThreeStops = (<span><input name="threeStops" type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.threeStops} /><label>3 пересадки {this.state.threeStops ? 'ON' : 'OFF'}</label></span>);
    return (
      <div>
        <div className="header__logo">
          <img src="./assets/images/logo.svg" alt="header__logo"/>
        </div>
        <div className="FilterData">
          <h1>Количество пересадок</h1>
          {checkboxisAll}
          <br />
          {checkboxNoStops}
          <br />
          {checkboxOneStops}
          <br />
          {checkboxTwoStops}
          <br />
          {checkboxThreeStops}
        </div>
        <Tickets data={dataFiltred(...stopsStates)} />
      </div>
    );
  }
}

const dataFiltred = (stateNoStops, stateOneStops, stateTwoStops, stateThreeStops) => {
  // const isAll = this.state.all;
  const isNoStops = stateNoStops;
  const isOneStops = stateOneStops;
  const isTwoStops = stateTwoStops;
  const isThreeStops = stateThreeStops;

  const noStops = isNoStops ? 0 : false;
  const oneStops = isOneStops ? 1 : false;
  const twoStops = isTwoStops ? 2 : false;
  const threeStops = isThreeStops ? 3 : false;


  const numberStops = [noStops, oneStops, twoStops, threeStops];

  const condition = (obj) => {
    let result = obj === numberStops[0];
    for (let i = 1; i < numberStops.length; i += 1) {
      result += obj === numberStops[i];
    }
    return result;
  };

  const filterByStops = item => condition(item.stops);
  return dataSorted.filter(filterByStops);
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
