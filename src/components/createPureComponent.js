import React, { PureComponent } from 'react';

const createPureComponent = Component => (
  class extends PureComponent {
    render() {
      return (<Component {...this.props} />);
    }
  }
);

export default createPureComponent;