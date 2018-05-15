import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import dataJSON from './tickets.json';
import Tickets from './tickets/Tickets.jsx';
import Filter from './Filter.jsx';

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
      showOnly: false,
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

    const isShowOnly = (name) => {
      const states = ['all', 'noStops', 'oneStops', 'twoStops', 'threeStops'];
      const statesFalseArray = states.filter(state => state !== name);
      return statesFalseArray;
    };

    this.setState({
      all: isAllSelected(),
      [name]: e.target.checked,
    });
  }

  onHandleChangeOnly = (e) => {
    const nameTarget = e.target.name;

    const isClicked = (name) => {
      if (name) {
        return true;
      }
      return false;
    };

    this.setState({
      all: false,
      noStops: isClicked(),
      oneStops: isClicked(),
      twoStops: isClicked(),
      threeStops: isClicked(),
      [nameTarget]: true,
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
  };
  render() {
    const stopsStates = [
      this.state.noStops,
      this.state.oneStops,
      this.state.twoStops,
      this.state.threeStops,
    ];
    const stopsStatesAll = [this.state.all, stopsStates];
    const parameters = {
      handleChange: this.handleChange.bind(this),
      isAllSelec: this.isAllSelec.bind(this),
      onHandleChangeOnly: this.onHandleChangeOnly.bind(this),
      state: stopsStatesAll,
      all: this.state.all,
      noStops: this.state.noStops,
      oneStops: this.state.oneStops,
      twoStops: this.state.twoStops,
      threeStops: this.state.threeStops,
    };
    return (
      <div>
        <div className="header__logo">
          <img src="/assets/images/logo.svg" alt="header__logo"/>
        </div>
        <div className="container">
          <Filter {...parameters} />
          <div className="tickets">
            <Tickets data={dataFiltred(...stopsStates)} />
          </div>
        </div>
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
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
