import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import dataJSON from './tickets.json';
import Tickets from './tickets/Tickets.jsx';
import Filter from './Filter.jsx';

const dataSorted = dataJSON.tickets.sort((a, b) => a.price - b.price);

const dataFiltred = () => {
  const numberStops = [0, 1, 2, 3];

  const condition = (obj) => {
    let result = obj === numberStops[0];
    let separator = '||';
    for (let i = 1; i < numberStops.length; i += 1) {
        result += obj === numberStops[i];
      console.log("result", result);
      console.log("numberStops length", numberStops.length);
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
  const filterByStops = (item) => condition(item.stops);
  return dataSorted.filter(filterByStops);
};

class App extends React.Component {
  // static defaultProps = {
  //   all: true,
  // };

  constructor(props) {
    super(props);
    this.state = {
      all: true,
      noStops: false,
      oneStops: false,
      twoStops: false,
      threeStops: false,
    };
  }


  // this.setState({ isShown: !this.state.isShown });

  toggle(event) {
    const name = event.target.name;
    this.setState({
      all: !this.state.all,
      noStops: !this.state.noStops,
    });
  }

  onChangeAll(e) {
    const isAll = this.state.all;
    if(isAll === false) {
      this.setState({
        isAll: !isAll,
        noStops: true,
        oneStops: true,
        twoStops: true,
        threeStops: true,
      });
    }
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
    const isCheked = [];
    isCheked.push(
      //     <p key={uniqueId()}>{this.state.all ? 'Checked' : 'Unchecked'}</p>,
      <p key={uniqueId()}>{this.state.noStops ? 'Checked' : 'Unchecked'}</p>);
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
        </div>
        <Filter />
        <Tickets data={dataFiltred()} />
        {/*<Tickets data={<FiltredData />} />*/}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
