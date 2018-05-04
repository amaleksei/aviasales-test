import React from 'react';
import ReactDOM from 'react-dom';
import { uniqueId } from 'lodash';

import dataJSON from './tickets/tickets.json';
import Tickets from './tickets/tickets.jsx';

const dataSorted = dataJSON.tickets.sort((a, b) => a.price - b.price);

class Hello extends React.Component {
  render() {
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
        </div>
        <Tickets data={dataSorted} />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
