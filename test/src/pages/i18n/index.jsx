import React from 'react';

export default class extends React.Component {
  state = {
    name: '000',
  };

  componentDidMount() {
    this.getName();
  }

  async getName() {
    const name = await import('./name');
    this.setState({ name: name.default });
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <h3>i18n5</h3>
        <span>---{name}</span>
      </>
    );
  }
}
