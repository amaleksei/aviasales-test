import React from 'react';
import { uniqueId } from 'lodash';

class Filter extends React.Component {
  // state = { value: '' };
  //
  // handleChange = (e) => {
  //   this.setState({ value: e.target.value });
  // };
  //
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Your favorite flavor is: ${this.state.value}`);
  // };

  render() {
    const checkboxisAll = (<span><input name="all" type="checkbox" checked={this.props.isCheckedAll} onChange={this.props.isChangeAll} /><label>Все {this.props.isChecked}</label></span>);
    const checkboxNoStops = (<span><input name="noStops" type="checkbox" /><label>Без пересадок</label></span>);
    const checkboxOneStops = (<span><input name="oneStops" type="checkbox" /><label>1 пересадка</label></span>);
    const checkboxTwoStops = (<span><input name="twoStops" type="checkbox" /><label>2 пересадки</label></span>);
    const checkboxThreeStops = (<span><input name="threeStops" type="checkbox" /><label>3 пересадки</label></span>);
    return (
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
    );
  }
}

export default Filter;
