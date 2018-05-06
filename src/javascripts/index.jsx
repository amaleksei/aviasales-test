import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import dataJSON from './tickets/tickets.json';
import Tickets from './tickets/tickets.jsx';

const dataSorted = dataJSON.tickets.sort((a, b) => a.price - b.price);

// class FlavorForm extends React.Component {
//   state = { value: '' };
//
//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//   };
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Your favorite flavor is: ${this.state.value}`);
//   };
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite La Croix flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

class Filter extends React.Component {
  state = { value: '' };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your favorite flavor is: ${this.state.value}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Количество пересадок</label>
      </form>
    );
  }
}

// class ListItems extends React.Component {
//   render() {
//     const numbers = [0, 1];
//     return (
//       numbers.map(numbers => numbers)
//     );
//   }
// }

const dataFiltred = () => {
  const numbers = [0, 1];

  // const all =

  const number = (obj) => {
    return obj === 0 || obj === 2;
  };

  const filterByStops = (item) => {
    if (number(item.stops)) {
      return true;
    }
    return false;
  };

  // const listItems = numbers.map(numbers => {
  //   return (
  //     item.stops === numbers
  //   );
  // });
  return dataSorted.filter(filterByStops);
};

class App extends React.Component {
  static defaultProps = {
    all: true,
  };

  constructor(props) {
    super(props); // всегда обязательно
    this.state = {
      all: this.props.all,
      noStops: true,
      oneStops: true,
      twoStops: true,
      threeStops: true,
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

  onChangeAll = (e) => {

  };

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
    const checkboxisAll = (<span><input name="all" type="checkbox" onClick={this.toggle.bind(this)} /><label>Все</label></span>);
    const checkboxNoStops = (<span><input name="noStops" type="checkbox" onChange={this.toggle.bind(this)} /><label>Без пересадок {this.state.noStops}</label></span>);
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
          <div className="FilterData">
            {checkboxisAll}
            <br />
            {checkboxNoStops}
            {/* <IsCheked data={!this.state.noStops}/> */}
            <br />
            <label>
              <input
                name="oneStops"
                type="checkbox"
                onChange={this.handleChange}
              />
              <span>1 пересадка</span>
            </label>
            <br />
            <label>
              <input
                name="twoStops"
                type="checkbox"
                onChange={this.handleChange}
              />
              <span>2 пересадки</span>
            </label>
            <br />
            <label>
              <input
                name="threeStops"
                type="checkbox"
                onChange={this.handleChange}
              />
              <span>3 пересадки</span>
            </label>
          </div>
        </div>
        <Filter />
        <Tickets data={dataFiltred()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
