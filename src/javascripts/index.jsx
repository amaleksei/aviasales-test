import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import dataJSON from './tickets.json';
import Tickets from './tickets/Tickets.jsx';
// import Filter from './Filter.jsx';

const dataSorted = dataJSON.tickets.sort((a, b) => a.price - b.price);

const dataFiltred = () => {
  const numberStops = [0, 1, 2, 3];

  const condition = (obj) => {
    let result = obj === numberStops[0];
    const separator = '||';
    for (let i = 1; i < numberStops.length; i += 1) {
      result += obj === numberStops[i];
      // console.log('result', result);
      // console.log('numberStops length', numberStops.length);
    }
    return result;
  };

  const number = (obj) => {
    // const listItem = (numbers.map((numbers) => (obj === numbers)).join(' || '));
    const condition = obj === 0;
    // obj === 0 || obj === 2
    return (
      condition
    );
  };

  // const filterByStops = (item) => number(item.stops);
  const filterByStops = item => condition(item.stops);
  return dataSorted.filter(filterByStops);
};

class App extends React.Component {
  // static defaultProps = {
  //   all: true,
  // };

  // constructor(props) {
  //   super(props);
  //   this.onChange = this.onChange.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.state = {
  //     all: true,
  //     noStops: false,
  //     oneStops: false,
  //     twoStops: false,
  //     threeStops: false,
  //     testNumber: 1000,
  //   };
  // }

  state = {
    all: true,
    noStops: false,
    oneStops: false,
    twoStops: false,
    threeStops: false,
    testNumber: 1000,
  };


  // this.setState({ isShown: !this.state.isShown });

  toggle(event) {
    const name = event.target.name;
    this.setState({
      all: !this.state.all,
      noStops: !this.state.noStops,
    });
  }

  isAll = (e) => {
    const isAll = this.state.all;
    const isNoStops = this.state.noStops;
    const isOneStops = this.state.oneStops;
    const isTwoStops = this.state.twoStops;
    const isThreeStops = this.state.threeStops;

    const isAllSelected = () => {
      let AllStops = [isNoStops, isOneStops, isTwoStops, isThreeStops];
      let AllStopsFilteredCountTrue = [isNoStops, isOneStops, isTwoStops, isThreeStops].filter(item => item === true).length;
      if (AllStopsFilteredCountTrue === AllStops.length - 1) {
        return true;
      }
      return false;
    };

    this.setState({
      all: isAllSelected(),
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const isAll = this.state.all;
    const isNoStops = this.state.noStops;
    const isOneStops = this.state.oneStops;
    const isTwoStops = this.state.twoStops;
    const isThreeStops = this.state.threeStops;

    this.setState({
      [name]: e.target.checked,
    });

    // if (isAllSelected()) {
    //   this.setState({
    //     all: true,
    //   });
    // } else {
    //   this.setState({
    //     all: false,
    //   });
    // }
  }

// ? false : isAllSelected()
  isAllSelected = (e) => {
    const isNoStops = this.state.noStops;
    const isOneStops = this.state.oneStops;
    const isTwoStops = this.state.twoStops;
    const isThreeStops = this.state.threeStops;
    if (isNoStops && isOneStops && isTwoStops && isThreeStops) {
      this.setState({
        all: e.target.checked,
      });
    }
  }

  Change = (e) => {
    handleChange();
    isAllSelected();
  }

  // handleChange = (event) => {
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: event.target.checked,
  //   });
  // };

  // handleRemove = (value) => (e) => {
  //   e.preventDefault();
  //   const newItems = this.state.stops.filter(item => item !== value);
  //   this.setState({ stops: newStops });
  // };

  // {this.state.stops.map(i =>
  // <Item onRemove={this.handleRemove} value={i} />
  // )}

  // isAll = {
  //   if({this.state.isAll}) {
  //     item
  //   }
  //   item.stops === 0
  // };
  render() {
    // const isCheked = [];
    // isCheked.push(
      //     <p key={uniqueId()}>{this.state.all ? 'Checked' : 'Unchecked'}</p>,
      {/*<p key={uniqueId()}>{this.state.noStops ? 'Checked' : 'Unchecked'}</p>);*/}
    const isChecked = this.state.all ? 'checked' : 'unchecked';
    const checkboxisAll = (<span><input name="all" type="checkbox" onChange={this.handleChange.bind(this)} onClick={this.isAll.bind(this)} checked={this.state.all} /><label>Все {isChecked}</label></span>);
    const checkboxNoStops = (<span><input name="noStops" type="checkbox" onClick={this.handleChange.bind(this)} onChange={this.isAll.bind(this)} /><label>Без пересадок {this.state.noStops ? 'ON' : 'OFF'}</label></span>);
    const checkboxOneStops = (<span><input name="oneStops" type="checkbox" onClick={this.handleChange.bind(this)} onChange={this.isAll.bind(this)} /><label>1 пересадка {this.state.oneStops ? 'ON' : 'OFF'}</label></span>);
    const checkboxTwoStops = (<span><input name="twoStops" type="checkbox" onClick={this.handleChange.bind(this)} onChange={this.isAll.bind(this)} /><label>2 пересадки {this.state.twoStops ? 'ON' : 'OFF'}</label></span>);
    const checkboxThreeStops = (<span><input name="threeStops" type="checkbox" onClick={this.handleChange.bind(this)} onChange={this.isAll.bind(this)} /><label>3 пересадки {this.state.threeStops ? 'ON' : 'OFF'}</label></span>);
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
        </div>
        {/*<Filter number={this.state.testNumber} isCheckedAll={this.state.all} isChangeAll={this.onChangeAll} isChecked={this.state.all ? 'ON' : 'OFF'} />*/}
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
        <Tickets data={dataFiltred()} />
        {/* <Tickets data={<FiltredData />} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
